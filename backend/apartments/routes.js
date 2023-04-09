const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middle_functions");
const {db} = require("../firebase");
const apartmentRouter = express.Router();
require("dotenv").config();
apartmentRouter.use(cors());
apartmentRouter.use(express.json());

apartmentRouter.get("/apartment_list", middleware.auth(req, res, next), async (req, res) => {
    try {
        const groups = await db.collection('groups').get();
    }
    catch(error) {
        res.status(400).json(error);
    }
});

apartmentRouter.post("/amenities", middleware.auth(req, res, next), (req, res) => {
    try {

    }
    catch(error) {

    }
});

module.exports = {apartmentRouter};