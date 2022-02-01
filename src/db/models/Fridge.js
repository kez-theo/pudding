const Sequelize = require("sequelize");
const db = require("../db");
//through table between user and foodItem
const Fridge = db.define("fridge", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Fridge;
