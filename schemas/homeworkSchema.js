const mongoose = require("mongoose");

const homeworkSchema = mongoose.Schema(
  {
    serialNumber: {
      type: String,
     },
    course: {
      type: String,
    },
    title: {
      type: String,
      unique: true,   
    },
    deadline: {
      type: String,
    },
    body: {
      type: String,
    },
    completed: {
      type: Array,
    },
    complexity:{
      type:String
    }
  },
  { versionKey: false, timestamps: true }
);

module.exports = { homeworkSchema };
