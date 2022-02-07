const Sequelize = require("sequelize");
const pkg = require("../../package.json");
require("dotenv").config();

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
//It was if (process.env.DATABASE_URL) I changed to if true because the ssl wasn't working
<<<<<<< HEAD
if (true) {
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}
<<<<<<< HEAD
//console.log("herokudb",process.env.HEROKU_DB);
const db = new Sequelize(
  
=======
console.log("herokudb", process.env.HEROKU_DB);
=======
// if (true) {
//   config.dialectOptions = {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   };
// }
>>>>>>> 1491e5794a72f7b0b3145e4c2ac2f0bbfb878861
const db = new Sequelize(
>>>>>>> 01ed1dbcba11acfc5f976853dc1f24e41b27c98a
  //process.env.DATABASE_URL || `postgres://${process.env.HEROKU_DB}`,
  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
