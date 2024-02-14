import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import studentRouter from "./src/endpoints/studentEndpoint.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use("/selfimplementation", studentRouter);
mongoose.connect(process.env.dbconnect)
    .then(() => {
        console.log("Database connected sucessfull !!!");
    })
    .catch(error => {
        console.error("Error occured to connect to database", error);
    });
app.listen(process.env.port, () => {
    console.log(`Server listening on: http://localhost:${process.env.port}`);
})