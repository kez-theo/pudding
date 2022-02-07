const router = require("express").Router();
const FoodItem = require("../db/models/FoodItem");
const axios = require("axios");
const Fridge = require("../db/models/Fridge");
const User = require("../db/models/User");

let UserId = 1;

router.get("/", async (req, res, next) => {
  try {
    const foodItems = await FoodItem.findAll();
    res.json(foodItems);
  } catch (err) {
    next(err);
  }
});

router.get("/:foodItemId", async (req, res, next) => {
  try {
    console.log(req.params.foodItemId);
    const foodItem = await FoodItem.findOne({
      where: { id: req.params.foodItemId },
    });
    if (!foodItem) {
      res.status(404).send("Sorry this foodItem does not exist!");
    } else {
      res.json(foodItem);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let fooditem = await FoodItem.findOrCreate({
      where: { foodItem_name: req.body.foodItem_name },
    });
    res.status(201).json(fooditem[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
