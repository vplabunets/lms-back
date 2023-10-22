const express = require("express");
const {validateBody} = require("../middlewares/index")
const { tryCatchWrapper } = require("../helpers/index");
const {  addHomework,
    getHomeworks,
    getHomeworkByTitle,
    getHomeworkBySerialNumber,
    getHomeworkById,
    updateHomework,  } = require("../controller/homework.controller");
const { homeworkSchema } = require("../schemas//homeworkSchema");
const { auth } = require("../middlewares/index");

const homeworkRouter = express.Router();

homeworkRouter.get("/", tryCatchWrapper(auth),tryCatchWrapper(getHomeworks));
homeworkRouter.get("/:serialNumber", tryCatchWrapper(getHomeworkBySerialNumber));
homeworkRouter.get("/ids/:_id", tryCatchWrapper(getHomeworkById))
homeworkRouter.get("/homework/:title", tryCatchWrapper(getHomeworkByTitle));
homeworkRouter.post("/", tryCatchWrapper(addHomework))
homeworkRouter.put("/:_id", tryCatchWrapper(updateHomework))

module.exports = { homeworkRouter };
