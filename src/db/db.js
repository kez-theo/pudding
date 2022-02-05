const Sequelize = require("sequelize");
const pkg = require("../../package.json");
//import HEROKU_DB from '@env';
const HEROKU_DB = "take it from .env I don't have time for this fu***g sh**t :)" 


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
if (true) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  
  process.env.DATABASE_URL || `postgres://${HEROKU_DB}`,
  //process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
