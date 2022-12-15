import express from'express';
import cors from'cors';
import UserController from"./users/users-controllers.js";
import QuestionController from"./questions/questions-controller.js";
import mongoose from "mongoose";
import LoginController from "./login/login-controller.js";
import RegisterController from "./register/register-controller.js"
import AnswersControllers from "./answers/answers-controllers.js";

const MONGO_LOCAL='mongodb://localhost:27017/quans';
const app=express()
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_LOCAL);

// mongoose.connect('mongodb+srv://aishwaryakumara:Aishu1234@cluster0.len2zb0.mongodb.net/?retryWrites=true&w=majority');

UserController(app);
QuestionController(app);
LoginController(app);
RegisterController(app);
AnswersControllers(app);
console.log("thisisnode")
app.listen(process.env.PORT||4000);