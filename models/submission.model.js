import mongoose, { Schema } from "mongoose";

const submissionSchema = new Schema(
    {
        submissionDate: {
            type: String,
            required: true,
        },
        attachedFile: {
            type: String,
            required: true,
            enum: ["PDF", "PNG", "JPEG"],
        },
        comments: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true });

export const Submission = mongoose.model('Submission', submissionSchema);