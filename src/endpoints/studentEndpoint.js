import { createStud, allStudents, searchStud, deleteStudent, updateStudent, createProfile } from "../controllers/index.js";
import express from "express";

const studentRouter = express.Router();
studentRouter.post("/registerstudent", createStud);
studentRouter.get("/allstudents", allStudents);
studentRouter.get("/search", searchStud);
studentRouter.delete("/deletethis/:serialNumber", deleteStudent);
studentRouter.patch("/updatethis/:serialNumber", updateStudent);


//profile 

studentRouter.post("/createprofile", createProfile);

export default studentRouter;