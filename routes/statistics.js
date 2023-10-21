const express = require("express");
const {validateBody} = require("../middlewares/index")
const { tryCatchWrapper } = require("../helpers/index");
const {  getStatistics, addStatistics, updateStatistics  } = require("../controller/statistics.controller");
const { statisticsSchema } = require("../schemas/statisticsSchema");
const { auth } = require("../middlewares/index");

const statisticsRouter = express.Router();

statisticsRouter.get("/", tryCatchWrapper(auth),tryCatchWrapper(getStatistics));
statisticsRouter.post("/", tryCatchWrapper(addStatistics))
statisticsRouter.put("/:_id", tryCatchWrapper(updateStatistics))

module.exports = { statisticsRouter };
