const createError = require("http-errors");
const { Statistics } = require("../models/statistic");

async function addStatistics(req, res, next) {
  const { attendance, rating, completionQuality } = req.body;
  try {
    await Statistics.create({
      attendance,
      rating,
      completionQuality,
    });
    res.status(201).json({
      attendance,
      rating,
      completionQuality,
    });
  } catch (err) {
    if (err.message.includes("E11000 duplicate key error")) {
      return next(createError(409, "Item with this title already exists"));
    }
    throw err;
  }
}

async function getStatistics(req, res, next) {
  const { limit = 0, page = 1 } = req.body;

  try {
    const skip = (page - 1) * limit;
    const statistics = await Statistics.find({}).skip(skip).limit(limit);

    return res.status(200).json(statistics);
  } catch (err) {
    console.error(err);
  }
}
async function updateStatistics(req, res, next) {
  const { _id } = req.params;
  console.log(_id);

  try {
    const updatedStatistics = await Statistics.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedStatistics);
  } catch (error) {
    console.error(err);
  }
}

module.exports = { addStatistics, getStatistics, updateStatistics };
