const express = require("express");
const { validateBody } = require("../middlewares/index");
const { tryCatchWrapper } = require("../helpers/index");
const {
  createArticle,
  getArticles,
  getArticleById,
  getArticleByTitle,
  updateArticle,
} = require("../controller/article.controller");
const { articleSchema } = require("../schemas/articleSchema");
const { auth } = require("../middlewares/index");

const articleRouter = express.Router();

articleRouter.get(
  "/",
  // tryCatchWrapper(auth),
  tryCatchWrapper(getArticles)
);
articleRouter.get(
  "/:_id",
  // tryCatchWrapper(auth),
  tryCatchWrapper(getArticleById)
);
articleRouter.get(
  "/titles/:title",
  // tryCatchWrapper(auth),
  tryCatchWrapper(getArticleByTitle)
);
articleRouter.post(
  "/",
  // tryCatchWrapper(auth),
  tryCatchWrapper(createArticle),
  validateBody(articleSchema)
);
articleRouter.put(
  "/:_id",
  // tryCatchWrapper(auth),
  tryCatchWrapper(updateArticle)
);

module.exports = { articleRouter };
