
const createError = require("http-errors");
const { Lesson } = require("../models/lesson");
 
async function addLesson (req, res, next) {
  const { serialNumber, course, title, url,addMaterials } = req.body;
   try {
     await Lesson.create({
      serialNumber,
      course,
      title,
      url,
      addMaterials
      });
    res.status(201).json({
        serialNumber,
        course,
        title,
        url,
        addMaterials},
    );
  } catch (err) {
    if (err.message.includes("E11000 duplicate key error")) {
      return next(createError(409, "Lesson with this title already exists"));
    }
    throw err;
  }
}

async function getLessons(req, res, next) {
  const { limit = 0, page = 1} = req.body;

  try {
    const skip = (page - 1) * limit;
    const lessons = await Lesson.find({}).skip(skip).limit(limit);

    return res.status(200).json(lessons);
  } catch (err) {
    console.error(err);
  }
}
async function getLessonBySerialNumber(req, res, next) {
    console.log(req.params)
  const { serialNumber } = req.params;
  try {
    const lesson = await Lesson.findOne({serialNumber});
    if (!lesson) {
      return res.status(400).json({ message: "Lesson not found" });
    }
    return res.status(200).json(lesson);
  } catch (error) {
    console.error(err);
  }}

  async function getLessonByTitle(req, res, next) {
    const { title } = req.params;
    console.log("title",title);
    try {
      const lesson = await Lesson.findOne({title});
      if (!lesson) {
        return res.status(400).json({ message: "Lesson not found" });
      }
      return res.status(200).json(lesson);
    } catch (error) {
      console.error(err);
    }}

  async function updateLesson(req, res, next) {
    const { _id } = req.params;
    console.log(_id);

    try{
    const updatedLesson = await Lesson.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
     return res.status(200).json(updatedLesson);}
    catch (error) {
      console.error(err);
    }
  }










module.exports = {  addLesson,
                    getLessons,
                    getLessonByTitle,
                    getLessonBySerialNumber,
                    updateLesson,
                 };
