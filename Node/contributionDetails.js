const mongoose = require("mongoose");

const ContributionDetailSchema = new mongoose.Schema({
  
    contribution_type: String,
    body: String,
    userFName:String,
    userLName:String,
    email: String,
    notes:{type:String,default:""},
    status:{type:String,default:"Pending"},
    community_points:{type:Number,default:0},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserInfo"
    }
}, {
    collection : "Contribution"
});

mongoose.model("Contribution", ContributionDetailSchema);