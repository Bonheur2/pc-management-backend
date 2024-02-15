import { profile } from "../../schema/profileModal.js";


export const getAllProfile = async (req, res) => {
    const id = req.params.id

    try {
        const profiles = await profile.find();

        if (!profiles) {
            return res.status(404).json({
                message: "Something went wrong!!!"
            })
        } else {
            return res.status(200).json({
                message: "Profile retrieved successfull!!!",
                profiles: profiles
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error!!"
        })
    }
};