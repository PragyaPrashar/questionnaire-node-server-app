import loginModel from "./login-model.js";

export const createLoginDetails = (loginDetails)=> loginModel.create(loginDetails);
export const findByUsername = (username)=> loginModel.findById(username);
export const findAll = ()=> loginModel.find();