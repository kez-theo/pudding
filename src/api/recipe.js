/* eslint-disable no-unused-vars */
const router = require("express").Router();
const Recipe = require("../db/models/Recipe");
const User = require("../db/models/User");

let UserId = 1;

router.post("recipe/:UserId", async (req, res, next) => {
  try {
    let user = await User.findOne({Where: { id: 1 }});
    const recipeToSave = await Recipe.findOrCreate({
      where: { id: req.body.id },
    });
    let user_recipe = user.addRecipe(recipe);
    res.status(201).json(fridge);
  } catch (error) {
    next(error);
  }
});
