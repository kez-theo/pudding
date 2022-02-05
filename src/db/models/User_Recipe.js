const Sequelize = require("sequelize");
const db = require("../db");
//through table
const User_Recipe = db.define("user_recipe", {
  isFav: {
    type: Sequelize.BOOLEAN,
  },
  isCurrent: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User_Recipe;
