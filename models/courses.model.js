import mongoose from "mongoose";

const courseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        schedule: {
            type: String,
            required: true,
        },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Instructor",
        },
    },
    { timeStamps: true });

export const Course = mongoose.model('Course', courseSchema);