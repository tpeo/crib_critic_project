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

apartmentRouter.get("/apartment_features/:name", async (req, res) => {
    try {
      const apartmentsRef = db.collection('apartments');
      const document = await apartmentsRef.doc(req.params.name).get();
      res.status(200).json(document.data());
    }
    catch(error) {
      res.status(400).json(error);
    }
  });

apartmentRouter.get("/card_list", async (req, res) => {
  try {
    const apartments = await db.collection('apartments').get();
    const apartmentNames = [];
    apartments.forEach((doc) => {
      console.log(doc)
      console.log(doc.data())
      apartmentNames.push({
        name: doc.id,
        address: doc.data().address,
        image: doc.data().picture,
      });
    });
    res.status(200).json({apartmentNames: apartmentNames});
}
catch(error) {
  res.status(400).json(error);
}
})
  

module.exports = {apartmentRouter};