import mongoose, { Schema } from "mongoose";


const resourceSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        fileType: {
            type: String,
            enum: ["PDF", "Image", "Video"]
        },
        filePath: {
            type: String,
            required: true,
        },
        module: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Module",
        },
    },
    { timeStamps: true });

export const Resource = mongoose.model('Resource', resourceSchema);