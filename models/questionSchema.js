import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    questions: { type : String, default: 'question'}, // create question with [] default value
    answers : { type : String, default: 0},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);