import mongoose, { Schema } from "mongoose";

const responseSchema = Schema(
    {
        quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
        responses: [
            {
                questionId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Question',
                    required: true
                },
                answer: [{ type: String, required: true }],
            }
        ]
    },
    {
        timestamps: true
    }
);

export default mongoose.model('Response', responseSchema);
