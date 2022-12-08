import mongoose from "mongoose";
const questionsSchema=mongoose.Schema({
    question_id: Number,
    question: String,
    question_img: {data: Buffer, contentType: String},
    user_id: Number,
    genre:{type:Array, of: String},
    answer_id: {type: Array, of: Number}


}, {timestamps:true}, {collection: "questions"})

export default questionsSchema;