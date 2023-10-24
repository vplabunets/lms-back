const { mongoose } = require("mongoose");
const { statisticsSchema } = require("../schemas/statisticsSchema");

const Statistics = mongoose.model("statistics", statisticsSchema);

module.exports = { Statistics };
