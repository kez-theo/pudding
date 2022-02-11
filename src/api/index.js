const router = require("express").Router();

module.exports = router;

router.use("/fridge", require("./fridge"));
router.use("/foodItems", require("./foodItems"));
router.use("/users", require("./users"));
router.use("/recipe", require("./recipe"));

router.use((req, res, next) => {
  const err = new Error("Route not found!");
  err.status = 404;
  next(err);
});
