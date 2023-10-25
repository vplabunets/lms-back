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
    completed: [
      {
        _id: false,
        user: { type: String, unique: true },
        status: String,
        grade: Number,
      },
    ],

    complexity: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = { homeworkSchema };
