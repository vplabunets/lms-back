const { mongoose } = require("mongoose");
const { articleSchema } = require("../schemas/articleSchema");

const Article = mongoose.model("articles", articleSchema);

module.exports = { Article };
