const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const {apartmentRouter} = require('./apartments/routes.js');

app.use("/apartments", apartmentRouter);

app.listen(process.env.PORT, () => console.log("Listening on port ", process.env.PORT));