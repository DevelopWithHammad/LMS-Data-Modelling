import mongoose, { Schema } from "mongoose";

const gradeSchema = new Schema(
    {
        score: {
            type: Number,
            required: true,
        },
        assignmentData: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Assignment",
        },
        instructor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Instructor",
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
    },
    { timeStamps: true });

export const Grade = mongoose.model('Grade', gradeSchema);