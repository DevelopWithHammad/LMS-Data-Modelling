import mongoose from "mongoose";

const instructorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        education: {
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
        experienceInYears: {
            type: Number,
            required: true,
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        }
    },
    { timeStamps: true });

export const Instructor = mongoose.model('Instructor', instructorSchema);