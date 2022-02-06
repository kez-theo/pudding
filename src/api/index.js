const router = require("express").Router();

// Your routes go here!
module.exports = router;
//routers for our own databases --> commented out for now
// router.use('/campuses', require('./campuses'));
router.use("/fridge", require("./fridge"));
router.use("/foodItems", require("./foodItems"));
//router.use("/users", require("./users"));
// If someone makes a request
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error("Route not found!");
  err.status = 404;
  next(err);
});
