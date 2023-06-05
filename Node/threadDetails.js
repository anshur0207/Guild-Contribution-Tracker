const mongoose = require("mongoose");




const ThreadDetailsDetailSchema = new mongoose.Schema(

  {

    threadId: String,

    status: String,

  },

  {

    collection: "threadDetails",

  }

);




mongoose.model("threadDetails", ThreadDetailsDetailSchema);