/* eslint-disable no-unused-vars */
const router = require("express").Router();
const FoodItem = require("../db/models/FoodItem");
const Fridge = require("../db/models/Fridge");
const User = require("../db/models/User");

let UserId = 1;

router.post("fridge/:UserId", async (req, res, next) => {
  try {
    let user = await User.findByPk(UserId);
    const FoodItem = await FoodItem.findOne({
      where: { foodItem_name: req.body.name },
    });
    let fridge = FoodItem.setUser(user);
    res.status(201).json(fridge);
  } catch (error) {
    next(error);
  }
});
