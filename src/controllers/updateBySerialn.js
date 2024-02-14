import { student } from "../schema/studentModal.js";

export const updateStudent = async (req, res) => {
    const serial = req.params.serialNumber;

    try {
        const updatedStudent = await student.findOneAndUpdate(
            { SerialNumber: serial },
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: `No student found with serial number: ${serial}`
            });
        }

        return res.status(200).json({
            message: "Update successful!",
            updatedStudent: updatedStudent
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error!"
        });
    }
};
