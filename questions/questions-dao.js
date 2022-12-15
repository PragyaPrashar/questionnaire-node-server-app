import questionsModel from "./questions-model.js";
import userModel from "../users/users-model.js";
export const find=()=> questionsModel.find();
export const createQuestion=(question)=> questionsModel.create(question);
export const findQuestionById=(uid)=> questionsModel.findById({_id:uid});
export const deleteQuestion=(qid)=>questionsModel.deleteOne({_id: qid});
export const updateQuestion=(qid,question)=>questionsModel.updateOne({_id:qid},{$set:question})









