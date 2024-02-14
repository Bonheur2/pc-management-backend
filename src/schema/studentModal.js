import mongoose from "mongoose";


const { schema } = mongoose;
const studentshema = mongoose.Schema({
    RegistrationDate: {
        type: Date,
    }, 
    studentName: {
        type: String,
        required: true
    },
    SerialNumber: {
        type: String,
        required: true
    },
    School: {
        type: String,
    },
    Department: {
        type: String,
    },
    Gate: {
        type: String,
    },
    School: {
        type: String,
        required: true
    },
    RegNumber: {
        type: Number,
        required: true
    },
    Identification: {
        type: Number,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
    }
})

export const student = mongoose.model("Student", studentshema);