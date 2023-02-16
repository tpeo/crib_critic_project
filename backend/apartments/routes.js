const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middle_functions");
const firebase = require("../firebase");
const auth = express.Router();
require("dotenv").config();
auth.use(cors());
auth.use(express.json());

auth.get("/", middleware.auth(req, res, next), (req, res) => {
});

auth.post("/", middleware.auth(req, res, next), (req, res) => {

});