const mongoose = require("mongoose");

const SocialSchema = new mongoose.Schema({
   title:String,
   content:String,
   isDeleted: {
    type: Boolean,
    default: false,
  }
});

const Social = mongoose.model("Social", SocialSchema);
module.exports = Social;
