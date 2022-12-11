import mongoose from "mongoose";

const questionsSchema=mongoose.Schema({
    _id: Number,
    question: String,
    question_img: {data: Buffer, contentType: String},
    time: String,
    user_id: String,
    genre:{type:Array, of: String},
    answers: {type: Array, of: Number}


}, {collection: "questions"})

export default questionsSchema;