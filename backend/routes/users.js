const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middle_functions");
const {db} = require("../firebase");

const userRouter = express.Router();
userRouter.use(cors());
userRouter.use(express.json());

userRouter.post('/add_to_favorites', async (req, res) => {
    try {
        const usersRef = db.collection('users');
        const documentRef = usersRef.doc(req.body.user);
        const document = await documentRef.get();
        const existingArray = document.get(`favorites`) || [];
        existingArray.push(req.body.apartment);
        await documentRef.update({ favorites: existingArray });
        res.status(200).json("Successful add");
      }
      catch(error) {
        res.status(400).json(error);
      }
});

userRouter.post('/favorites/:username', async (req, res) => {
    try {
        const usersRef = db.collection('users');
        const document = await usersRef.doc(req.params.username).get();
        res.status(200).json({favorites: document.data().favorites});
    }
    catch(error) {
        res.status(400).json(error);
    }
})

module.exports = {userRouter};