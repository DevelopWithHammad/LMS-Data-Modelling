import mongoose, { Schema } from "mongoose";


const moduleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        assignment: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Assignment",
            }
        ],
        content: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true });

export const Module = mongoose.model('Module', moduleSchema);