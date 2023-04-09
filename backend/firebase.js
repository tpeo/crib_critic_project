var admin = require("firebase-admin");
require('dotenv').config()

var serviceAccount = process.env.CRED_JSON;

console.log(process.env.CRED_JSON)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = {db}