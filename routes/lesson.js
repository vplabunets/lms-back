const express = require("express");
const { validateBody } = require("../middlewares/index");
const { tryCatchWrapper } = require("../helpers/index");
const {
  addLesson,
  getLessons,
  getLessonByTitle,
  getLessonBySerialNumber,
  updateLesson,
} = require("../controller/lesson.controller");
const { lessonSchema } = require("../schemas/lessonSchema");
const { auth } = require("../middlewares/index");

const lessonRouter = express.Router();

lessonRouter.get("/", tryCatchWrapper(auth), tryCatchWrapper(getLessons));
lessonRouter.get(
  "/:serialNumber",
  tryCatchWrapper(auth),
  tryCatchWrapper(getLessonBySerialNumber)
);
lessonRouter.get(
  "/lesson/:title",
  tryCatchWrapper(auth),
  tryCatchWrapper(getLessonByTitle)
);
lessonRouter.post(
  "/",
  tryCatchWrapper(auth),
  tryCatchWrapper(addLesson),
  validateBody(lessonSchema)
);
lessonRouter.put(
  "/:_id",
  //  tryCatchWrapper(auth),
  tryCatchWrapper(updateLesson)
);

module.exports = { lessonRouter };
