import mongoose from "mongoose";
import loginSchema from "./login-schema.js";

const loginModel = mongoose.model("LoginModel",loginSchema);
export default loginModel;