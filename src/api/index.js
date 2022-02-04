const router = require("express").Router();

// Your routes go here!

//routers for our own databases --> commented out for now
// router.use('/campuses', require('./campuses'));

// If someone makes a request
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use("/foodItems", require("./foodItems"));
router.use((req, res, next) => {
  const err = new Error("Route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
