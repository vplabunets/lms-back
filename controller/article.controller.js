
const createError = require("http-errors");
const { Article } = require("../models/article");
// async function addRecipe(req, res, next) {
//   const { name } = req.body;
//   await Recipe.create({ name });
//   return res.status(201).json(req.body);
// }
async function createArticle (req, res, next) {
  const { category, title, body, viewed } = req.body;
   try {
    console.log(req.body);
    await Article.create({
      category,
      title,
      body,
      viewed
      });
    res.status(201).json({
      category, title, body, viewed},
    );
  } catch (err) {
    if (err.message.includes("E11000 duplicate key error")) {
      return next(createError(409, "Atricle with this title already exists"));
    }
    throw err;
  }
}




async function getArticles(req, res, next) {
  const { limit = 0, page = 1} = req.body;

  try {
    const skip = (page - 1) * limit;
    const articles = await Article.find({}).skip(skip).limit(limit);

    return res.status(200).json({ articles });
  } catch (err) {
    console.error(err);
  }
}

module.exports = { createArticle, getArticles };
