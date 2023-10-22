const { mongoose } = require("mongoose");
const { homeworkSchema } = require("../schemas/homeworkSchema");

const Homework = mongoose.model("homeworks", homeworkSchema);

module.exports = { Homework };
