import mongoose from "mongoose";
import answersSchema from "./answers-schema.js";

const answerModel=mongoose.model('answers',answersSchema );
export default answerModel;