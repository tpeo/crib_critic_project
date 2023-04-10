const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const {apartmentRouter} = require('./routes/apartments.js');
const {userRouter} = require('./routes/users.js');

app.use("/apartments", apartmentRouter);

app.use('/users', userRouter);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(process.env.PORT, () => console.log("Listening on port ", process.env.PORT));