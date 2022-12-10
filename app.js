import express from 'express';
import cors from 'cors';
import UserController from "./controllers/users/users-controllers.js";
import QuestionController from "./controllers/questions/questions-controller.js";
import mongoose from "mongoose";

const MONGO_LOCAL='mongodb://localhost:27017/quans';
const app=express()
app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_LOCAL);
UserController(app);
QuestionController(app);
console.log("this is node")
app.listen(4000);