import { createStud, allStudents, searchStud, deleteStudent, updateStudent } from "../controllers/index.js";
import express from "express";

const studentRouter = express.Router();
studentRouter.post("/registerstudent", createStud);
studentRouter.get("/allstudents", allStudents);
studentRouter.get("/search", searchStud);
studentRouter.delete("/deletethis/:serialNumber", deleteStudent);
studentRouter.delete("/updatethis/:serialNumber", deleteStudent);

export default studentRouter;