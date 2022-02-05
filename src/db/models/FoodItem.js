const Sequelize = require("sequelize");
const db = require("../db");

const FoodItem = db.define("foodItem", {
  foodItem_name: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  category: {
    type: Sequelize.STRING,
  },
});
module.exports = FoodItem;

//put in nutrition
