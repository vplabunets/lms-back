const express = require("express");
const {validateBody} = require("../middlewares/index")
const { tryCatchWrapper } = require("../helpers/index");
const { createArticle, getArticles,getArticleById, getArticleByTitle,updateArticle } = require("../controller/article.controller");
const { articleSchema } = require("../schemas/articleSchema");

const articleRouter = express.Router();

articleRouter.get("/", tryCatchWrapper(getArticles));
articleRouter.get("/:_id", tryCatchWrapper(getArticleById));
articleRouter.get("/titles/:title", tryCatchWrapper(getArticleByTitle));

articleRouter.post("/", tryCatchWrapper(createArticle))
articleRouter.put("/:_id", tryCatchWrapper(updateArticle))

module.exports = { articleRouter };
