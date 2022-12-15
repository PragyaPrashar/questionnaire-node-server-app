import * as answerDao from './answers-dao.js'
import {findUserById} from "./answers-dao.js";
import * as userDao from "../users/users-dao.js";
import * as questionDao from "../questions/questions-dao.js"


const createAnswer = async (req, res) => {
    const newAnswer = req.body;
    const insertedAnswer = await answerDao.createAnswer(newAnswer);
    const userId=newAnswer.user_id;
    let userObj = await userDao.findUserById(userId);
    userObj.answersAnswered.push(newAnswer._id);
    const updatedUserObject= await userDao.updateUser(userId,userObj);

   const questionId=newAnswer.question_id;
    let questionObj= await questionDao.findQuestionById(questionId);
    questionObj.answers.push(newAnswer._id);
    const updatedQuestionObject= await questionDao.updateQuestion(questionId,questionObj);
    res.json(insertedAnswer);
}



const getAllAnswers=async(req, res)=>{
    const users=await answerDao.findAllAnswer();
    res.json(users)
}


const AnswerController =(app) =>{

    app.post('/api/answer',createAnswer);
    app.get('/api/answer',getAllAnswers);

}
export default AnswerController;