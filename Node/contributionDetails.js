const mongoose = require("mongoose");

const ContributionDetailSchema = new mongoose.Schema({
    c_id: String,
    contribution_type: String,
    body: String,
    email: String,
}, {
    collection : "Contribution"
});

mongoose.model("Contribution", ContributionDetailSchema);