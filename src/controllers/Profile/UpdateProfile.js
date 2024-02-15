import { profile } from "../../schema/profileModal.js";

export const updateProfile = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedProfile = await profile.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProfile) {
            return res.status(404).json({
                message: "Profile not found!"
            });
        } else {
            return res.status(200).json({
                message: "Profile updated successfully",
                updatedProfile: updatedProfile
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
