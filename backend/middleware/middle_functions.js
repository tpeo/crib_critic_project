const express = require("express");
const {fb, db} = require("../firebase.js");
const app = express();

const auth = (req, res, next) => {
try {
    const tokenId = req.get("Authorization").split("Bearer ")[1];
    return fb.admin
    .auth()
    .verifyIdToken(tokenId)
    .then((decoded) => {
        req.token = decoded;
        next();
    })
    .catch((err) => res.status(401).send(err));
} catch (e) {
    res.status(400).send("Errors");
}
};

module.exports = {auth}