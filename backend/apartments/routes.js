const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middle_functions");
const {db} = require("../firebase");
const auth = express.Router();
require("dotenv").config();
auth.use(cors());
auth.use(express.json());

auth.get("/apartment_list", middleware.auth(req, res, next), async (req, res) => {
    try {
        const groups = await db.collection('groups').get();
    }
    catch(error) {
        res.status(400).json(error);
    }
});

auth.post("/amenities", middleware.auth(req, res, next), (req, res) => {
    try {

    }
    catch(error) {

    }
});

module.exports = {auth};