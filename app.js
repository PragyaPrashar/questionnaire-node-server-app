import express  from 'express';
import cors from 'cors'
import mongoose from "mongoose";

import LoginController from "./login/login-controller";

const app = express();
app.use(cors());
app.use(express.json());
const MONGO_LOCAL = 'mongodb://localhost:27017/tuiter';
mongoose.connect(MONGO_LOCAL);
LoginController(app);
app.listen(process.env.PORT || 4000)
