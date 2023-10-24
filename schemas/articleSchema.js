const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    category: {
      type: String,
    },
    title: {
      type: String,
      unique: true,
    },
    body: {
      type: String,
    },
    viewed: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = { articleSchema };
