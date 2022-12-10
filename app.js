import express  from 'express';
import cors from 'cors'
import mongoose from "mongoose";

import LoginController from "./login/login-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
const MONGO_LOCAL = 'mongodb://localhost:27017/quans';
mongoose.connect(MONGO_LOCAL);
console.log("hello there");
LoginController(app);
app.listen(process.env.PORT || 4000)
