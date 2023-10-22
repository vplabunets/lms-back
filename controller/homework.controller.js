
const createError = require("http-errors");
const { Homework } = require("../models/homework");
 
async function addHomework(req, res, next) {
  const { serialNumber, course, title, deadline,mainInfo, completed,complexity} = req.body;
   try {
     await Homework.create({
      serialNumber,
      course,
      title,
      deadline,
      mainInfo,
      completed,
      complexity
      });
    res.status(201).json({
        serialNumber,
        course,
        title,
        deadline,
        mainInfo,
        completed,
        complexity
      },
    );
  } catch (err) {
    console.log(err)
    if (err.message.includes("E11000 duplicate key error")) {
      return next(createError(409, "Homework with this title already exists"));
    }
    throw err;
  }
}

async function getHomeworks(req, res, next) {
  const { limit = 0, page = 1} = req.body;

  try {
    const skip = (page - 1) * limit;
    const homeworks = await Homework.find({}).skip(skip).limit(limit);

    return res.status(200).json(homeworks);
  } catch (err) {
    console.error(err);
  }
}
async function getHomeworkBySerialNumber(req, res, next) {
    console.log(req.params)
  const { serialNumber } = req.params;
  try {
    const homework = await Homework.findOne({serialNumber});
    if (!homework) {
      return res.status(400).json({ message: "Homework not found" });
    }
    return res.status(200).json(homework);
  } catch (error) {
    console.error(err);
  }}
  async function getHomeworkById(req, res, next) {
    const { _id } = req.params;
    
    try {
      const homework = await Homework.findById({_id});
      if (!homework) {
        return res.status(400).json({ message: "Homework not found" });
      }
      return res.status(200).json(homework);
    } catch (error) {
      console.error(err);
    }}
  async function getHomeworkByTitle(req, res, next) {
    const { title } = req.params;
    console.log("title",title);
    try {
      const homework = await Homework.findOne({title});
      if (!homework) {
        return res.status(400).json({ message: "Homework not found" });
      }
      return res.status(200).json(homework);
    } catch (error) {
      console.error(err);
    }}

  async function updateHomework(req, res, next) {
    const { _id } = req.params;
    console.log(_id);

    try{
    const updatedHomework = await Homework.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
     return res.status(200).json(updatedHomework);}
    catch (error) {
      console.error(err);
    }
  }










module.exports = {  addHomework,
                    getHomeworks,
                    getHomeworkByTitle,
                    getHomeworkBySerialNumber,
                    getHomeworkById,
                    updateHomework,
                 };
