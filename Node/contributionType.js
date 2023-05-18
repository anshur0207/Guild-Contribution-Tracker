const mongoose = require("mongoose");

const ContributionTypeDetailSchema = new mongoose.Schema(
  {
    contribution_type: String,

    community_points: { type: Number, default: 0 },
  },
  {
    collection: "ContributionType",
  }
);
mongoose.model("ContributionType", ContributionTypeDetailSchema);
// User.insertMany([
//   { contribution_type: "case study submission", community_points: 150 },
//   { contribution_type: "session", community_points: 500 },
//   { contribution_type: "asset", community_points: 250 },
//   { contribution_type: "utility", community_points: 200 },
//   { contribution_type: "mentoring", community_points: 350 },
//   { contribution_type: "support", community_points: 300 },
//   { contribution_type: "webinar", community_points: 450 },
//   { contribution_type: "interviews", community_points: 400 },
//   { contribution_type: "others", community_points: 50 },
// ])
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
