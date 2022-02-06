require("dotenv").config();
const admin = require("firebase-admin");

const serviceAccount = require("../client/firebaseAuth/serviceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const checkAuth = async (req, res, next) => {
  try {
    if (req.headers.authtoken) {
      req.user = await admin.auth().verifyIdToken(req.headers.authtoken);
      next();
    } else {
      res.status(403).send("Unauthorized");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkAuth };