const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  school: {
    type: String
  },
  subject: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  hobbies: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
