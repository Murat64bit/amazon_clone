// PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// FILES
const authRouter = require("./routes/auth");
const DB = "mongodb+srv://murat32bit:Murat1234@cluster0.b61cahu.mongodb.net/MyDb";

// INIT
const PORT = 3000;
const app = express();

// Middleare
app.use(express.json());
app.use(authRouter);

// Conntecions
mongoose.connect(DB)
    .then(() => {
        console.log("Connection succesfull");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log("connected at port " + PORT);
});