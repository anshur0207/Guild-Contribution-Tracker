var axios = require("axios");
var qs = require("qs");


const mongoose= require("mongoose");

require("./contributionDetails");
const contribute = mongoose.model("Contribution");

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
        "1//0gblwp4TJ7C0XCgYIARAAGBASNwF-L9IruFkCRtBJBif69v8PZxQLnbCzjeLZbTVisSz2NNfcLfHevoER7ENuG_YQHcvhh1gnvT4",
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
        accessToken = await response.data.access_token;

       // console.log("Access Token " + accessToken);
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
      
        Ids.push(...details.map(detail => detail.id));
        //console.log(Ids); 

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
    var messages = [];
    var newMessages = [];
    for(let i = 0;i<threadId.length;i++){
        const message = await this.readGmailContent(threadId[i]);
        const encodedMessage =await message.payload.body.data;

        if(encodedMessage){
            //email body
            const decodedStr = Buffer.from(encodedMessage, "base64").toString("ascii");

            //contribution type
            const contributionType = decodedStr.split(/Contribution_Type:/i)[1].split("\r\n")[0].trim();
          
            //email Id
            var header = message.payload.headers
            for(let i=0;i<header.length;i++){
              if(header[i].name === "From"){
                var str = header[i].value;
                str= str.substring(str.indexOf("<") + 1, str.lastIndexOf(">"));
                
              }
            }
            
           
            
              //pushing into array 
              messages.push({
                contribution_type:contributionType,
                body:decodedStr,
                email:str
              });
              
           
            


            //pushing data into db
            try {
              const oldUser = await contribute.findOne({
                contribution_type:contributionType,
                email:str});
              if(!oldUser){
                await contribute.create({    
                  contribution_type: contributionType,
                  body:decodedStr,
                  email:str,
              })
              newMessages.push({
                contribution_type:contributionType,
                body:decodedStr,
                email:str
              });
              console.log("New Contributions:");
                console.log(newMessages);
                console.log("User inserted");
              }
                
            } catch (error) {
              console.log({status:"error",data:error})
            }
        
        }
        
        
        
    }


    return messages;
  };
}

module.exports = new GmailAPI();
