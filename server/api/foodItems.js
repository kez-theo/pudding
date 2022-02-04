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

router.post("/api/foodItems", async (req, res, next) => {
  console.log("finding");
  try {
    console.log("finding2 ");
    let exist = await FoodItem.findOne({ where: { name: req.body.name } });
    if (exist === null) {
      console.log("not found");
      let createInfo = await FoodItem.create(req.body);
      res.status(201).json(createInfo);
    } else {
      res.status(409).send("exists?");
    }
  } catch (error) {
    next(error);
  }
});
