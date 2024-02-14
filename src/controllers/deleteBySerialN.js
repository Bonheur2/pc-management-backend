import { student } from "../schema/studentModal.js";

export const deleteStudent = async (req, res) => {
    const serial = req.params.serialNumber;

    try {
        const deletedStudent = await student.findOneAndDelete({ SerialNumber: serial });

        if (!deletedStudent) {
            return res.status(404).json({
                message: `No student found with serial number: ${serial}`
            });
        }

        return res.status(200).json({
            message: "Student deleted successfully",
            deletedStudent: deletedStudent
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
