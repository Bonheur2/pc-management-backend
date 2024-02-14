import studentRouter from "./studentEndpoint";
import express from "express";

const mainRouter = express.Router();
mainRouter.use("/student", studentRouter)
export default mainRouter;