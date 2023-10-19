const { mongoose } = require("mongoose");
const { lessonSchema } = require("../schemas/lessonSchema");

const Lesson = mongoose.model("lessons", lessonSchema);

module.exports = { Lesson };
