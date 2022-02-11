/* eslint-disable no-unused-vars */
const router = require("express").Router();
const Recipe = require("../db/models/Recipe");
const User = require("../db/models/User");

let UserId = 1;

<<<<<<< HEAD:src/api/recipe.js
router.post("/:UserId", async (req, res, next) => {
=======
router.get("/", async (req, res, next) => {
  try {
    const recipe = await Recipe.findAll();
    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const users = await Recipe.findOne({
      where: {
        id: req.params.id
      },
    })
    res.json(users)
  } catch(err) {
    next (err)
  }
})

router.post("/:id", async (req, res, next) => {
>>>>>>> main:src/api/recipes.js
  try {
    let user = await User.findOne({ where: { id: 2 } });
    const recipeToSave = await Recipe.findOrCreate({
      where: { id: req.body.id },
    });
    let user_recipe = user.addRecipe(recipeToSave[0]);
    res.status(201).json(user_recipe);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
