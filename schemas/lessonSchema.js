const mongoose = require("mongoose");

const lessonSchema = mongoose.Schema(
  {
    serialNumber: {
      type: String,
      unique:true
    },
    subject: {
      type: String,
    },
    title: {
      type: String,
      unique: true,   
    },
    url: {
      type: String,
    },
    addMaterials: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = { lessonSchema };
