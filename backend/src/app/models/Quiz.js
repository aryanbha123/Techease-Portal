import mongoose, { Schema } from "mongoose";

const OptionsSchema = Schema({
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    text: { type: String, required: true },
    image: { type: String, required: false },
    isCorrect: { type: Boolean, default: false },
});

const QuestionSchema = Schema({
    quizId: { type: Schema.Types.ObjectId, required: true, ref: 'Quiz' },
    question: String,
    image:{type:String},
    marks: { type: Number, required: true },
    category: {
        type: String,
        enum: ["MCQ", "MSQ", "Integer"],
        default: "MCQ",
    },
    answer: { type: String, sparse: true },
    options: {
        type:[{ type: mongoose.SchemaTypes.ObjectId, ref: 'Options' }],
        default: [],
    }
});

const QuizSchema = Schema(
    {
        creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', required: true },
        opensAt: { type: Date, required: true },
        closeAt: { type: Date, required: true },
        duration: { type: Date, require: true },
        questions: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Questions' }],
        marks: { type: Number, required: true },
        averageScore: { type: Number, default: 0 },
        heightestScore: { type: Number, default: 0 },
        isAvailable: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

const Option  = mongoose.model('Options', OptionsSchema);
const Question = mongoose.model('Questions', QuestionSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);
export { Question , Option};
export default Quiz;