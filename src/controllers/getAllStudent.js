import { student } from "../schema/studentModal.js";


export const allStudents = async (req, res) => {
    try {
        const students = await student.find();
        if (student.length === 0) {
            return res.status(404).json({ message: "No students found" });
        }
        else {
            return res.status(200).json({
                message: "Students retrieved successfull!!!",
                students: students
            });
        }
    }
    catch (error) {
        console.log("Error retrieving students: ", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


