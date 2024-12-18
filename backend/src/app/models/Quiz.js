import mongoose, { Schema } from "mongoose";

const OptionsSchema = Schema({
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
    text: { type: String, required: false },
    image: { type: String, required: false },
    isCorrect: { type: Boolean, default: false },
});

const QuestionSchema = Schema({
    quizId: { type: Schema.Types.ObjectId, required: true, ref: 'Quiz' },
    question: { type: String },
    image: { type: String  ,sparse:true},
    marks: { type: Number, required: true },
    negative:{type:Number,default:0},
    category: {
        type: String,
        enum: ["MCQ", "MSQ", "Text"],
        default: "MCQ",
    },
    answer: { type: String, sparse: true },
    options: {
        type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Options' }],
        default: [],
    },
    type:{type:[String] , default:[]},
    tags:{type:[String] , default:[]},
});

const QuizSchema = Schema(
    {
        creator: { type: mongoose.SchemaTypes.ObjectId, ref: 'Users', required: true },
        title: { type: String },
        opensAt: { type: Date, required: true },
        closeAt: { type: Date, required: true },
        duration: { type: Number, require: true },
        questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Questions' }],
        marks: { type: Number, required: true },
        averageScore: { type: Number, default: 0 },
        heightestScore: { type: Number, default: 0 },
        isAvailable: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

QuestionSchema.pre('save', async function (next) {
    if (this.options.length === 0 && (this.category === "MCQ" || this.category == 'MSQ')) {
        const defaultOptions = Array(4).fill(null).map(() => ({
            questionId: this._id,
            text: "", // Empty text for default
            image: "", // No image
            isCorrect: false, // Default to incorrect
        }));

        // Save options and push their IDs to `this.options`
        const savedOptions = await Option.insertMany(defaultOptions);
        this.options = savedOptions.map(option => option._id);
    }
    next();
});

const Option = mongoose.model('Options', OptionsSchema);
const Question = mongoose.model('Questions', QuestionSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);
export { Question, Option };
export default Quiz;