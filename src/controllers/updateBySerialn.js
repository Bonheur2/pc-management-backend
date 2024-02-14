import { student } from "../schema/studentModal";


export const updateStudent = async (req, res) => {
    const serial = req.params.serialNumber;

    try {
        const updatedstudent = await student.findOneAndUpdate(
            {
                serialNumber: serial
            });
        if (!updatedstudent) {
            return res.status(404).json({
                message: "Something went wrong"
            })
        }
        else {
            res.status(200).json({
                message: "Updated made successfull!!",
                updatedstudent: updatedstudent
            })
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error!!"
        })
    }
}