const Sequelize = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  recipe_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  steps: {
    type: Sequelize.TEXT,
   // allowNull: false,
  },
  ingredients: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
   // allowNull: true,
  },
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Recipe;
