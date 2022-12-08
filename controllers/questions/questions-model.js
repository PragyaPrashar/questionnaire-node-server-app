import mongoose from "mongoose";
import questionsSchema from "./questions-schema";
const questionsModel=mongoose.model('questions', questionsSchema);
export default questionsModel;