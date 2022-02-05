const Sequelize = require("sequelize");
const pkg = require("../../package.json");

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
  process.env.DATABASE_URL || `postgres://cxlycvoyhxckbj:c0137493caf25cb89235a5c8c71cd026afb7c1aee40e68295f36c5849850cb53@ec2-18-235-114-62.compute-1.amazonaws.com:5432/ds5itaqreog7c`,
  //process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
