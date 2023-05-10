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

