const router = require("express").Router();
const FoodItem = require("../db/models/FoodItem");
const Fridge = require("../db/models/Fridge");
const User = require("../db/models/User");

let UserId = 1;

router.get("/:foodItemId", async (req, res, next) => {
  try {
    const foodItem = await FoodItem.findByPk(req.params.foodItemId);
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
    let exist = await FoodItem.findOne({ where: { name: req.body.name } });
    if (exist === null) {
      let createInfo = await FoodItem.create({ name: req.body.name });
      res.status(201).json(createInfo);
    } else {
      res.status(409).send("exists?");
    }
  } catch (error) {
    next(error);
  }
});
