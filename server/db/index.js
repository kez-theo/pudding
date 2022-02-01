const Sequelize = require("sequelize");
const db = require("./db");
const FoodItem = require("./models/FoodItem");
const Fridge = require("./models/Fridge");
const Recipe = require("./models/Recipe");
const User_Recipe = require("./models/User_Recipe");
const User = require("./models/User");

//user, food, and their fridge associations
User.belongsToMany(FoodItem, { through: Fridge });
FoodItem.belongsToMany(User, { through: Fridge });

//user, recipe, and their recipes associations
User.belongsToMany(Recipe, { through: User_Recipe });
Recipe.belongsToMany(User, { through: User_Recipe });

module.exports = {
  db,
  models: {
    FoodItem,
    Fridge,
    Recipe,
    User_Recipe,
    User,
  },
};
