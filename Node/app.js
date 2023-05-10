const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
var nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");

const JWT_SECRET = "DFGHJKLK,MNBVCCVGHJKJHGFfghjkmnbvfrtyu9876";
const MongoClient = require("mongodb").MongoClient;

// Database name
const databasename = "test";

const mongourl = "mongodb+srv://anshu:anshu@cluster0.tulmyqc.mongodb.net/test";
require("./contributionType");
const Type = mongoose.model("ContributionType");

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
require("./contributionDetails");

const Mails = mongoose.model("Contribution");

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password, userType } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const olduser = await User.findOne({ email });

    if (olduser) {
      return res.send({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "Ok" });
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contributions123@gmail.com",
        pass: "hnlywmfafqejjbqi",
      },
    });

    var mailOptions = {
      from: "contributions123@gmail.com",
      to: email,
      subject: "Thank You For Register with us",
      text: "Hi<b>"+fname+ "</b>,Thanku for Register with our website Guild Contribution tracker ! Kindly Start Contributing And get community Points. Thank you, Team :- Guild Contribution tracker ",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("Email Send");
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: 100000,
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })

      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

app.get("/getAllData", async (req, res) => {
  try {
    const allData = await Mails.find({});
    res.send({ status: "ok", data: allData });
  } catch (error) {
    console.log(error);
  }
});
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:4000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contributions123@gmail.com",
        pass: "hnlywmfafqejjbqi",
      },
    });

    var mailOptions = {
      from: "contributions123@gmail.com",
      to: "anshur0202@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // console.log(link);
    
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteUsers", async (req, res) => {
  try {
    const { userid } = req.body;
    const deleteUsers = await User.deleteOne({ _id: userid });
    res.send({ status: "Ok", data: "Deleted" });
    console.log({ status: "Ok", data: "Deleted" });
  } catch (err) {
    console.log(err);
  }
});
app.post("/deleteContribution", async (req, res) => {
  try {
    const { id, contribution_type, email } = req.body;
    const deleteMails = await Mails.deleteOne({ _id: id });
    res.send({ status: "Ok", data: "Deleted" });
    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "contributions123@gmail.com",
    //     pass: "hnlywmfafqejjbqi",
    //   },
    // });

    // var mailOptions = {
    //   from: "contributions123@gmail.com",
    //   to: email,
    //   subject: "Your Contribution is Deleted",
    //   text: "Dear User Your Contribution type" +contribution_type+ " is Deleted by Admin , Kindly Submit Again with Correct data  Thank you , Team: Guild Contribution tracker",
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
    console.log({ status: "Ok", data: "Deleted" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/changeStatus", async (req, res) => {
  const { email, contribution_type, status } = req.body;

  try {
    // const contribution=await Mails.findOne({email,contribution_type});

    // if(contribution){
    //     Mails.status="Approved"
    //     Mails.save();
    //     return res.send({status:"Ok"});

    // }

    // console.log("No Contribution found");
    const filter = { email, contribution_type };
    if (status === "Accept") {
      const update = { status: "Approved" };
      const doc = await Mails.findOneAndUpdate(filter, update, { new: true });

      res.send(doc);
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "contributions123@gmail.com",
          pass: "hnlywmfafqejjbqi",
        },
      });

      var mailOptions = {
        from: "contributions123@gmail.com",
        to: email,
        subject: "Hurray !! Contribution Accepted ",
        text:
        "<b>Hii , user </b> user We are so happy to say that your Contribution type " +
          contribution_type +
          " is Accepted By our Admin And your Community Points is also credited , Team: Guild Contribution Tracker",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } else if (status === "Reject") {
      const update = { status: "Rejected" };
      const doc = await Mails.findOneAndUpdate(filter, update, { new: true });
      res.send(doc);
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "contributions123@gmail.com",
          pass: "hnlywmfafqejjbqi",
        },
      });

      var mailOptions = {
        from: "contributions123@gmail.com",
        to: email,
        subject: "Oh no ! Your Contribution is rejected",
        html:
        "<b>Hii , user </b>" +
          contribution_type +
          " is rejected , Kindly Contribute Again to get Community Points Thank You ! Team: Guild Contribution Tracker",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//Fetching data from database

// MongoClient.connect(mongourl)
//   .then((client) => {
//     const connect = client.db(databasename);

//     // Connect to collection
//     const collection = connect.collection("Contribution");

//     // Count the total documents
//     collection
//       .countDocuments({ status: "Approved" })
//       .then((count_documents) => {
//         console.log(count_documents);
//         //  res.send(count_documents);
//       })
//       .catch((err) => {
//         console.log(err.Message);
//       });
//   })
//   .catch((err) => {
//     // Printing the error message
//     console.log(err.Message);
//   });

//   });

app.post("/sendData", async (req, res) => {
  const { id } = req.body;
  const total_contri = count_documents;
  try {
    res.send(total_contri);
    console.log({ total_contri });
  } catch (err) {
    console.log(err);
  }
});

app.post("/changePoints", async (req, res) => {
  const { email } = req.body;

  var tpoints = 0;

  // for (const i of await Mails.find({ email })) {
  //   if (i.status === "Approved") {
  //     tpoints = tpoints + i.community_points;
  //   }
  // }
  for (const i of await Mails.find({ email })) {
    const cp = await Type.findOne({ contribution_type: i.contribution_type });
    if (i.status === "Approved") {
      tpoints = tpoints + cp.community_points;
    }
  }

  try {
    const doc = await User.findOneAndUpdate(
      { email },
      { points: tpoints },
      { new: true }
    );

    res.send({ data: doc, status: "ok" });
  } catch (err) {
    res.send({ status: "Failed" });
  }
});

app.post("/updateContribution", async (req, res) => {
  const { body, contribution_type, email } = req.body;

  try {
    const doc = await Mails.findOneAndUpdate(
      { email, contribution_type },

      { body },

      { new: true }
    );

    res.send({ data: doc, status: "ok" });
  } catch (err) {
    res.send({ status: "Failed" });
  }
});

app.post("/updateNotes", async (req, res) => {
  const { notes, contribution_type, email } = req.body;

  try {
    const doc = await Mails.findOneAndUpdate(
      { email, contribution_type },

      { notes },

      { new: true }
    );

    res.send({ data: doc, status: "ok" });
  } catch (err) {
    res.send({ status: "Failed" });
  }
});

app.listen(4000, () => {
  console.log("Server Started");
});

//index.js
var gmail = require("./Gmail");
gmail
  .readInboxContent("Contribution_Type:")
  .then((data) => {
    console.log("All Contributions:");
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
