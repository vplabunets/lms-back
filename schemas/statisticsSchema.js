const mongoose = require("mongoose");

const statisticsSchema = mongoose.Schema(
  {
    attendance: {
      type: Array,
    },
    rating: {
      type: Array,
     },
    completionQuality: {
      type: Array,
    },
 
  },
  { versionKey: false, timestamps: true }
);

module.exports = { statisticsSchema };
