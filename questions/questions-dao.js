import questionsModel from "./questions-model.js";
export const find=()=> questionsModel.find();
export const createQuestion=(question)=> questionsModel.create(question);
export const deleteQuestion=(qid)=>questionsModel.deleteOne({_id: qid});
export const updateUser=(uid,user)=>questionsModel.updateOne({_id:uid},{$set:user})









