import mongoose from "mongoose";
import questionsSchema from "./questions-schema.js";
const questionsModel=mongoose.model('questions', questionsSchema);
export default questionsModel;