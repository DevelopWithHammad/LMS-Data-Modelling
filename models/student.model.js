import mongoose from "mongoose";

const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        fatherName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        age: {
            type: Number,
            required: true,
        },
        CNIC: {
            type: Number,
            required: true,
            unique: true,
        },
        education: {
            type: String,
            required: true,
        },
        courseName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
        address: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true });

export const Student = mongoose.model('Student', studentSchema);