import { student } from "../schema/studentModal.js";

export const searchStud = async (req, res) => {
    try {
        const query = req.body.query;
        const regexQuery = new RegExp(query, "i");
        const results = await student.find({
            $or: [
                { SerialNumber: regexQuery },
                { studentName: regexQuery },
                { School: regexQuery },
                { Department: regexQuery },
                { Gate: regexQuery },
                { RegNumber: parseInt(query) || 0 },
                { Identification: parseInt(query) || 0 },
                { PhoneNumber: parseInt(query) || 0 },
                { Email: regexQuery }
            ]
        });
        if (results.length === 0) {
            return res.status(404).json({
                message: "No matching records found"
            });
        } else {
            return res.status(200).json(results);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
