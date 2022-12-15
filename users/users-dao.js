import userModel from "./users-model.js";
export const findUserById=(uid)=> userModel.findById({_id:uid});
export const createUser=(user)=> userModel.create(user);
export const deleteUser=(uid)=>userModel.deleteOne({_id: uid});
export const updateUser=(uid,user)=>userModel.updateOne({_id:uid},{$set:user})
export const findAllUser=()=>userModel.find();









