

var axios = require("axios");




var qs = require("qs");




var nodemailer = require("nodemailer");




const mongoose = require("mongoose");




require("./userDetails");




const User = mongoose.model("UserInfo");




require("./threadDetails");




const thread = mongoose.model("threadDetails");




require("./contributionDetails");




const contribute = mongoose.model("Contribution");




require("./contributionType");




const Type = mongoose.model("ContributionType");




const Mailgen = require("mailgen");




const moment = require("moment");




class GmailAPI {

  accessToken = "";




  constructor() {

    this.accessToken = this.getAcceToken();

  }




  getAcceToken = async () => {

    var data = qs.stringify({

      client_id:

        "942020892524-r7f01k20k952a92djkgh0n636nfo57dh.apps.googleusercontent.com",




      client_secret: "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",




      refresh_token:

        "1//0gGAY4XwiWzOHCgYIARAAGBASNwF-L9IrT9YYqPeaOZNrDyq3CNu8bqabkBl0jlT43gNLmzbQodIDE1vqaO9w8F3QaIWja49svA8",




      grant_type: "refresh_token",

    });




    var config = {

      method: "post",




      url: "https://accounts.google.com/o/oauth2/token",




      headers: {

        "Content-Type": "application/x-www-form-urlencoded",

      },




      data: data,

    };




    let accessToken = "";




    await axios(config)

      .then(async function (response) {

        accessToken = await response.data.access_token; // console.log("Access Token " + accessToken);

      })




      .catch(function (error) {

        console.log(error);

      });




    return accessToken;

  };




  searchGmail = async (searchItem) => {

    var config1 = {

      method: "get",




      url:

        "https://www.googleapis.com/gmail/v1/users/me/messages?q=" + searchItem,




      headers: {

        Authorization: `Bearer ${await this.accessToken} `,

      },

    };




    var Ids = [];




    await axios(config1)

      .then(async function (response) {

        var details = await response.data["messages"];




        Ids.push(...details.map((detail) => detail.id)); //console.log(Ids);

      })




      .catch(function (error) {

        console.log(error);

      });




    return Ids;

  };




  readGmailContent = async (messageId) => {

    var config = {

      method: "get",




      url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,




      headers: {

        Authorization: `Bearer ${await this.accessToken}`,

      },

    };




    var data = {};




    await axios(config)

      .then(async function (response) {

        data = await response.data;

      })




      .catch(function (error) {

        console.log(error);

      });




    return data;

  };




  readInboxContent = async (searchText) => {

    const threadId = await this.searchGmail(searchText);




    var newMessages = [];




    console.log("Loading.....Kindly Wait");




    for (let i = 0; i < threadId.length; i++) {

      const oldMail = await thread.findOne({ threadId: threadId[i] });

      if (!oldMail) {

        const message = await this.readGmailContent(threadId[i]);




        const mimeType = await message.payload.mimeType;

        if (mimeType == "text/plain" || mimeType == "text/html") {

          //1. email body

          const encodedMessage = await message.payload.body.data;

          const decodedStr = Buffer.from(encodedMessage, "base64").toString(

            "ascii"

          );

          const decodedStr1 = decodedStr.split(/\r?\n/).slice(1).join(" ");




          //2. contribution type

          const contributionType1 = decodedStr

            .split(/Contribution_Type:/i)[1]

            .split("\r\n")[0]

            .trim();




          var contributionType = "";




          const type = [

            "Case Study Submission",




            "Interviews",




            "Webinar",




            "Support",




            "Mentoring",




            "Utility",




            "Asset",




            "Session",

          ];




          const includesValue = type.some((element) => {

            return element.toLowerCase() === contributionType1.toLowerCase();

          });




          if (includesValue) {

            contributionType = contributionType1.toLowerCase();

          } else contributionType = "others";




          //3. email Id

          var header = message.payload.headers;




          for (let i = 0; i < header.length; i++) {

            if (header[i].name === "From") {

              var str = header[i].value;




              str = str.substring(str.indexOf("<") + 1, str.lastIndexOf(">"));

            }




            if (header[i].name === "Date") {

              var curr_date = header[i].value;

            }

          }




          //4. user




          const user = await User.findOne({ email: str });




          //5.community_points




          const p = await Type.findOne({ contribution_type: contributionType });




          const community_points = p.community_points;




          //6. date




          let dates = moment(curr_date).format("D/MM/YYYY");




          //7.quaters




          const d = new Date(curr_date);




          const month = [

            "January",




            "February",




            "March",




            "April",




            "May",




            "June",




            "July",




            "August",




            "September",




            "October",




            "November",




            "December",

          ];




          let month_name = month[d.getMonth()];




          var quater = 0;




          if (

            month_name === "April" ||

            month_name === "May" ||

            month_name === "June"

          ) {

            quater = "Q1";

          } else if (

            month_name === "July" ||

            month_name === "August" ||

            month_name === "September"

          ) {

            quater = "Q2";

          } else if (

            month_name === "October" ||

            month_name === "November" ||

            month_name === "December"

          ) {

            quater = "Q3";

          } else if (

            month_name === "January" ||

            month_name === "February" ||

            month_name === "March"

          ) {

            quater = "Q4";

          }




          const oldUser = await contribute.findOne({

            contribution_type: contributionType,




            email: str,

          });




          //pushing data into db




          try {

            if (user) {

              if (decodedStr1 && contributionType1) {

                if (!oldUser) {

                  console.log(i + " " + mimeType);

                  const contributionDetails = {

                    contribution_type: contributionType,




                    body: decodedStr1,




                    email: str,

                    threadId: threadId[i],




                    date: dates,




                    fullDate: curr_date,




                    quater,




                    community_points,




                    userFName: user.fname,




                    userLName: user.lname,

                  };




                  //store details in object




                  await contribute.create(contributionDetails);




                  //Pushing contribution into user




                  const doc = await contribute.findOne(contributionDetails);




                  user.contributions.push(doc);




                  user.save();




                  //pushing thread Id

                  await thread.create({

                    threadId: threadId[i],

                    status: "Success",

                  });




                  // New Contributions




                  newMessages.push(contributionDetails);




                  var transporter = nodemailer.createTransport({

                    service: "gmail",




                    auth: {

                      user: "contributions123@gmail.com",




                      pass: "hnlywmfafqejjbqi",

                    },

                  });




                  let MailGenerator = new Mailgen({

                    theme: "default",




                    product: {

                      name: "Guild Contribution Tracker",




                      link: "https://mailgen.js/",

                    },

                  });




                  let response2 = {

                    body: {

                      intro: `Thank you ${user.fname} for submitting contribution of ${contributionType}. This is added against your name in the portal. You can review and edit the same on portal, And You will get ${community_points} Community Points .`,

                    },

                  };




                  let mail = MailGenerator.generate(response2);




                  var mailOptions = {

                    from: "contributions123@gmail.com",




                    to: str,




                    subject: "New Contribution is submitted",




                    html: mail,

                  };




                  transporter.sendMail(mailOptions, function (error, info) {

                    if (error) {

                      console.log(error);

                    } else {

                      console.log(

                        " Contribution Submission Email sent: " + info.response

                      );

                    }

                  });




                  var transporter = nodemailer.createTransport({

                    service: "gmail",




                    auth: {

                      user: "contributions123@gmail.com",




                      pass: "hnlywmfafqejjbqi",

                    },

                  });




                  var mailOptions = {

                    from: "contributions123@gmail.com",




                    to: "contributions123@gmail.com",




                    subject: "New Contribution is submitted  ",




                    text:

                      "Dear Admin , Your team Member " +

                      user.fname +

                      " is contributed towards  " +

                      contributionType +

                      ". Kindly Check.",

                  };




                  transporter.sendMail(mailOptions, function (error, info) {

                    if (error) {

                      console.log(error);

                    } else {

                      console.log(

                        " Admin Submssion notification Email sent: " +

                          info.response

                      );

                    }

                  });

                } else {

                  await thread.create({

                    threadId: threadId[i],

                    status: "Contribution exists",

                  });

                  //----------------------------SEND EMAIL------------------------------------------//

                  console.log(i + " Contribution exists");

                  var transporter = nodemailer.createTransport({

                    service: "gmail",




                    auth: {

                      user: "contributions123@gmail.com",




                      pass: "hnlywmfafqejjbqi",

                    },

                  });




                  let MailGenerator = new Mailgen({

                    theme: "default",




                    product: {

                      name: "Guild Contribution Tracker",




                      link: "https://mailgen.js/",

                    },

                  });




                  let response6 = {

                    body: {

                      intro: `Contribution Exists , Change your contribution type`,

                    },

                  };




                  let mail = MailGenerator.generate(response6);




                  var mailOptions = {

                    from: "contributions123@gmail.com",




                    to: str,




                    subject: "ALREADY EXISTS",




                    html: mail,

                  };




                  transporter.sendMail(mailOptions, function (error, info) {

                    if (error) {

                      console.log(error);

                    } else {

                      console.log(

                        " Contribution already exists Email sent: " +

                          str +

                          "----------" +

                          info.response

                      );

                    }

                  });

                }

              } else {

                await thread.create({

                  threadId: threadId[i],

                  status: "empty body",

                });

                //----------------------------SEND EMAIL------------------------------------------//

                console.log(i + " empty body");




                var transporter = nodemailer.createTransport({

                  service: "gmail",




                  auth: {

                    user: "contributions123@gmail.com",




                    pass: "hnlywmfafqejjbqi",

                  },

                });




                let MailGenerator = new Mailgen({

                  theme: "default",




                  product: {

                    name: "Guild Contribution Tracker",




                    link: "https://mailgen.js/",

                  },

                });




                let response8 = {

                  body: {

                    intro: `body or contribution type is empty`,

                  },

                };




                let mail = MailGenerator.generate(response8);




                var mailOptions = {

                  from: "contributions123@gmail.com",




                  to: str,




                  subject: "EMPTY BODY/CONTRIBUTION TYPE",




                  html: mail,

                };




                transporter.sendMail(mailOptions, function (error, info) {

                  if (error) {

                    console.log(error);

                  } else {

                    console.log(

                      "EMPTY BODY/CONTRIBUTION TYPE Email sent: " +

                        str +

                        "-----------------" +

                        info.response

                    );

                  }

                });

              }

            } else {

              await thread.create({

                threadId: threadId[i],

                status: "User does not Exists",

              });

              //----------------------------SEND EMAIL------------------------------------------//

              console.log(i + " user does not exists ... Please Login");




              var transporter = nodemailer.createTransport({

                service: "gmail",




                auth: {

                  user: "contributions123@gmail.com",




                  pass: "hnlywmfafqejjbqi",

                },

              });




              let MailGenerator = new Mailgen({

                theme: "default",




                product: {

                  name: "Guild Contribution Tracker",




                  link: "https://mailgen.js/",

                },

              });




              let response6 = {

                body: {

                  intro: `User should be Signed up into Guild Contribution Tracker`,

                },

              };




              let mail = MailGenerator.generate(response6);




              var mailOptions = {

                from: "contributions123@gmail.com",




                to: str,




                subject: "USER DOES NOT EXISTS",




                html: mail,

              };




              transporter.sendMail(mailOptions, function (error, info) {

                if (error) {

                  console.log(error);

                } else {

                  console.log(

                    "User does not exist Email sent: " +

                      str +

                      " -------------" +

                      info.response

                  );

                }

              });

            }

          } catch (error) {

            console.log({ status: "error", data: error });

          }

        } else {

          await thread.create({

            threadId: threadId[i],

            status: "Wrong Format",

          });

          //3. email Id

          var header = message.payload.headers;




          for (let i = 0; i < header.length; i++) {

            if (header[i].name === "From") {

              var str = header[i].value;




              str = str.substring(

                str.indexOf("\u003c") + 1,

                str.lastIndexOf("\u003e")

              );

            }

          }

          //----------------------------SEND EMAIL------------------------------------------//

          console.log(i + " Wrong format : " + mimeType + " " + str);




          var transporter = nodemailer.createTransport({

            service: "gmail",




            auth: {

              user: "contributions123@gmail.com",




              pass: "hnlywmfafqejjbqi",

            },

          });




          let MailGenerator = new Mailgen({

            theme: "default",




            product: {

              name: "Guild Contribution Tracker",




              link: "https://mailgen.js/",

            },

          });




          let response6 = {

            body: {

              intro: `Your contribution is sent in wrong format , please ensure your contribution does not have any attachments and make sure format is text/plain or text/html`,

            },

          };




          let mail = MailGenerator.generate(response6);




          var mailOptions = {

            from: "contributions123@gmail.com",




            to: str,




            subject: "WRONG FORMAT",




            html: mail,

          };




          transporter.sendMail(mailOptions, function (error, info) {

            if (error) {

              console.log(error);

            } else {

              console.log(

                " Wrong format email sent: " + str + "------ " + info.response

              );

            }

          });

        }

      } else {

        //console.log("Verified");

      }

    }

    console.log("New Contributions:");




    console.log(newMessages);

    var c = await contribute.find();

    return c;

  };

}




module.exports = new GmailAPI();


