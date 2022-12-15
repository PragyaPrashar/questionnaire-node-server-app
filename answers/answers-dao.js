import answerModel from "./answers-model.js";
export const findUserById=(uid)=> answerModel.findById({_id:uid});
export const createAnswer=(answer)=> answerModel.create(answer);
export const deleteUser=(uid)=>answerModel.deleteOne({_id: uid});
export const updateUser=(uid,user)=>answerModel.updateOne({_id:uid},{$set:user})
export const findAllAnswer=()=>answerModel.find();
