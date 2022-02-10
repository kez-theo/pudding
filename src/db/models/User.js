const Sequelize = require("sequelize");
const db = require("../db");
//const jwt = require("jsonwebtoken");
//const bcrypt = require("bcrypt");
//const secret = require('../../../config/secrets.js');

//const SALT_ROUNDS = 5;

const User = db.define("user", {
  uid: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  isLoggedIn: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  currentRecipe: {
    type: Sequelize.INTEGER,
  },
  myRecipes: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  myFav: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = User;
// /**
//  * instanceMethods
//  */
// User.prototype.correctPassword = function (candidatePwd) {
//   //we need to compare the plain version to an encrypted version of the password
//   return bcrypt.compare(candidatePwd, this.password);
// };

// User.prototype.generateToken = function () {
//   console.log('SECRET', secret.jwtSecret, secret)
//   return jwt.sign({ id: this.id }, secret.jwtSecret);
// };

// /**
//  * classMethods
//  */
// User.authenticate = async function ({ email, password }) {
//   console.log('SECRET', secret.jwtSecret)

//   const user = await this.findOne({ where: { email } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error("Incorrect username/password");
//     error.status = 401;
//     throw error;
//   }
//   return user.generateToken();
// };

// User.findByToken = async function (token) {
//   try {
//     const { id } = await jwt.(token, secret.jwtSecret);
//     const user = User.findByPk(id);
//     if (!user) {
//       throw "nooo";
//     }
//     return user;
//   } catch (ex) {
//     const error = Error("bad token");
//     error.status = 401;
//     throw error;
//   }
// };

// /**
//  * hooks
//  */
// const hashPassword = async (user) => {
//   //in case the password has been changed, we want to encrypt it with bcrypt
//   if (user.changed("password")) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// };

// User.beforeCreate(hashPassword);
// User.beforeUpdate(hashPassword);
// User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
