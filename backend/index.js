const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const {apartmentRouter} = require('./routes/apartments.js');
const {userRouter} = require('./routes/users.js');

app.use("/apartments", apartmentRouter);

app.use('/users', userRouter);

app.listen(process.env.PORT, () => console.log("Listening on port ", process.env.PORT));