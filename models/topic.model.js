import mongoose from "mongoose";

const topicSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
    },
    { timeStamps: true });

export const Topic = mongoose.model('Topic', topicSchema);