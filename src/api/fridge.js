/* eslint-disable no-unused-vars */
const router = require("express").Router();
const FoodItem = require("../db/models/FoodItem");
const Fridge = require("../db/models/Fridge");
const User = require("../db/models/User");

let UserId = 1;

router.get("/", async (req, res, next) => {
  try {
    const userFridge = await User.findAll({
      include: FoodItem,
    });

    res.json(userFridge);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const userFridge = await User.findOne({
      where: { id: req.params.userId },
      attributes: ["id"],
      include: [
        {
          model: FoodItem,
          attributes: ["id", "foodItem_name"],
          required: true,
        },
      ],
    });
    res.json(userFridge);
  } catch (error) {
    next(error);
  }
});

router.get("/:userId/:foodItemId", async (req, res, next) => {
  try {
    const userFood = await User.findOne({
      where: { id: req.params.userId },
      attributes: ["id"],
      include: {
        model: FoodItem,
        where: { id: req.params.foodItemId },
      },
    });
    if (!userFood) {
      res.status(404).send("Sorry you don't have this in your fridge!");
    } else {
      res.json(userFood);
    }
  } catch (err) {
    next(err);
  }
});
//quantity update only?
router.put("/:userId/:foodItemId", async (req, res, next) => {
  try {
    const userFridge = await Fridge.findOne({
      where: { userId: req.body.userId, foodItemId: req.body.foodItemId },
    });
    await userFridge.update(req.body);
    res.json(userFridge);
  } catch (error) {
    next(error);
  }
});

router.post("/:userId", async (req, res, next) => {
  try {
    let fooditem = await FoodItem.findOrCreate({
      where: { foodItem_name: req.body.foodItem_name },
    });
    let currentUser = await User.findOne({ where: { id: 1 } });
    let fridge = await currentUser.addFoodItem(fooditem[0], {
      through: { quantity: req.body.quantity },
    });
    res.status(201).json(fridge);
  } catch (error) {
    next(error);
  }
});

//entire fridge?
router.delete("/:UserId", async (req, res, next) => {
  try {
    const fridge = await Fridge.findOne({ where: { id: 1 } });
    await fridge.destroy();
    res.send(fridge);
  } catch (error) {
    next(error);
  }
});

//one thing in fridge
router.delete("/:UserId/:foodItemId", async (req, res, next) => {
  try {
    let currentUser = await User.findOne({ where: { id: 1 } });
    let fooditem = await FoodItem.findOne({
      where: { id: req.body.foodItemId },
    });
    currentUser.removeFoodItem(fooditem);
    res.status(204).send("No content");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
