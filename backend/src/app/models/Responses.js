import mongoose, { Schema } from "mongoose";

const responseSchema = Schema(
    {
        cheatingAttenpt: {type:Number , default:0},
        quizId: { type: Schema.Types.ObjectId, ref: 'Quiz', required: true },
        userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
        startedAt:{type:Date , default:Date.now()},
        isubmitted:{type:Boolean , default:flase},
        responses: [
            {
                question:{type:{} , default:{}},
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
