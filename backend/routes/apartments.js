const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middle_functions");
const {db} = require("../firebase");
const apartmentRouter = express.Router();
apartmentRouter.use(cors());
apartmentRouter.use(express.json());

apartmentRouter.get("/apartment_list", async (req, res) => {
    try {
        const apartments = await db.collection('apartments').get();
        const apartmentNames = [];
        apartments.forEach((doc) => {
            apartmentNames.push(doc.id);
        })
        res.status(200).json({apartmentNames: apartmentNames});
    }
    catch(error) {
        res.status(400).json(error);
    }
});

apartmentRouter.post("/amenities", (req, res) => {
    try {
    }
    catch(error) {

    }
});

module.exports = {apartmentRouter};