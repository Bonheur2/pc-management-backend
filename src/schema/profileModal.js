import mongoose from "mongoose";


const { schema } = mongoose;
const profileSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Role: {
        type: String,
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Location: {
        type: String,
    }
});

export const profile = mongoose.model("profile", profileSchema);