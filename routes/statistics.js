const express = require("express");
const { validateBody } = require("../middlewares/index");
const { tryCatchWrapper } = require("../helpers/index");
const {
  getStatistics,
  addStatistics,
  updateStatistics,
} = require("../controller/statistics.controller");
const { statisticsSchema } = require("../schemas/statisticsSchema");
const { auth } = require("../middlewares/index");

const statisticsRouter = express.Router();

statisticsRouter.get(
  "/",
  // tryCatchWrapper(auth),
  tryCatchWrapper(getStatistics)
);
statisticsRouter.post(
  "/",
  // tryCatchWrapper(auth),
  tryCatchWrapper(addStatistics),
  validateBody(statisticsSchema)
);
statisticsRouter.put(
  "/:_id",
  // tryCatchWrapper(auth),
  tryCatchWrapper(updateStatistics)
);

module.exports = { statisticsRouter };
