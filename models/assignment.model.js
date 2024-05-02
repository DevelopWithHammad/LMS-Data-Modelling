import mongoose, { Schema } from "mongoose";


const assignmentSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        dueDate: {
            type: String,
            required: true,
        },
        totalScore: {
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        module: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module",
        },
    },
    { timeStamps: true });

export const Assignment = mongoose.model('Assignment', assignmentSchema);