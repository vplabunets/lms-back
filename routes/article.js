const express = require("express");
const {validateBody} = require("../middlewares/index")
const { tryCatchWrapper } = require("../helpers/index");
const { createArticle, getArticles,getArticleById } = require("../controller/article.controller");
const { articleSchema } = require("../schemas/articleSchema");

const articleRouter = express.Router();

articleRouter.get("/", tryCatchWrapper(getArticles));
articleRouter.get("/:_id", tryCatchWrapper(getArticleById));
articleRouter.post("/", tryCatchWrapper(createArticle))
 
module.exports = { articleRouter };
