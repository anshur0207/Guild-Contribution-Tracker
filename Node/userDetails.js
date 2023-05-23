// const mongoose = require("mongoose");

// const userDetailSchema= new mongoose.Schema(
//     {
//         fname:String,
//         lname: String,
//         email:{type:String,unique:true},
//         password:String,
//         userType: String,
//     },
//     {
//         collection:"userInfo",
//     }

// );

// mongoose.model("userInfo",userDetailSchema);
const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    fname: String,

    lname: String,

    email: { type: String, unique: true },

    password: String,

    points: { type: Number, default: 0 },

    q1: { type: Number, default: 0 },

    q2: { type: Number, default: 0 },

    q3: { type: Number, default: 0 },

    q4: { type: Number, default: 0 },

    curr_yr_points: { type: Number, default: 0 },

    prev_yr_points: { type: Number, default: 0 },

    userType: String,

    contributions: [
      {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Contribution",
      },
    ],
  },

  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailSchema);
