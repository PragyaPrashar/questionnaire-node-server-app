import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controllers.js";
import QuestionController from "./controllers/questions/questions-controller.js";
import mongoose from "mongoose";

const MONGO_LOCAL='mongodb://localhost:27017/quans';
const app=express()
app.use(cors());
app.use(express.json());
//mongoose.connect(MONGO_LOCAL);

mongoose.connect('mongodb+srv://aishwaryakumara:Aishu1234@cluster0.len2zb0.mongodb.net/?retryWrites=true&w=majority');

UserController(app);
QuestionController(app);
console.log("this is node")
app.listen(process.env.PORT || 4000);