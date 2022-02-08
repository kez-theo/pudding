const Sequelize = require("sequelize");
const pkg = require("../../package.json");
require("dotenv").config();

const databaseName = pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");


const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
//It was if (process.env.DATABASE_URL) I changed to if true because the ssl wasn't working

// if (true) {
//   config.dialectOptions = {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   };
// }

//console.log("herokudb",process.env.HEROKU_DB);
// const db = new Sequelize(
  
// console.log("herokudb", process.env.HEROKU_DB);

if (true) {
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
process.env.DATABASE_URL || `postgres://${process.env.HEROKU_DB}`,
//process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
