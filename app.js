import express from'express';
import cors from'cors';
import UserController from"./users/users-controllers.js";
import QuestionController from"./questions/questions-controller.js";
import mongoose from "mongoose";
import LoginController from "./login/login-controller.js";

const MONGO_LOCAL='mongodb://localhost:27017/quans';
const app=express()
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_LOCAL);
UserController(app);
QuestionController(app);
LoginController(app);
console.log("thisisnode")
app.listen(process.env.PORT||4000);