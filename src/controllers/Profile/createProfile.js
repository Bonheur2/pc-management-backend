import { profile } from "../../schema/profileModal.js";


export const createProfile = async (req, res) => {
    let newProfile = await profile.create(req.body);
    try {
        if (!newProfile) {
            return res.status(404).json({
                message: "Something went wrong!!!"
            })
        }
        else {
            return res.status(202).json({
                message: "Profile Created successfull!!",
                profile: newProfile
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

