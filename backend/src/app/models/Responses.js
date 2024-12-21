import mongoose, { Schema } from "mongoose";

const responseSchema = Schema(
    {
        quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
        startedAt:{type:Date , default:Date.now()},
        isubmitted:{type:Boolean , default:flase},
        responses: [
            {
                questionId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Question',
                    required: true
                },
                correctAnswer:{type:String},
                answer: [{ type: String, required: true }],
            }
        ]
    },
    {
        timestamps: true
    }
);

// Create a composite key (unique index) on quizId and userId
responseSchema.index({ quizId: 1, userId: 1 }, { unique: true });

export default mongoose.model('Response', responseSchema);
