import * as questionDao from './questions-dao.js'

import * as userDao from '../users/users-dao.js'
const createQuestion = async (req, res) => {
    const newQuestion = req.body;
    console.log("this is before dao")
    const insertedQuestion = await questionDao.createQuestion(newQuestion);
    const userId = newQuestion.user_id;
    const loggedInUserObj = await userDao.findUserById(userId);
    loggedInUserObj.questionsAsked.push(newQuestion._id)
    const updatedLoggedInUser = await userDao.updateUser(userId,loggedInUserObj);
    console.log("this is after dao")
    res.json(insertedQuestion);
}



const findQuestion= async (req, res) => {
    const questions=await questionDao.find();
    console.log("question controller")
    res.json(questions)
}

const deleteQuestion = async (req, res) => {
    const questionIdToDelete=req.params.qid;
    const questionToDelete = await questionDao.findQuestionById(questionIdToDelete)
    const status=await questionDao.deleteQuestion(questionIdToDelete);
    const userId = questionToDelete.user_id;
    const loggedInUserObj = await userDao.findUserById(userId);
    const questionToDeleteIndex = loggedInUserObj.questionsAsked.indexOf(questionToDelete._id)
    loggedInUserObj.questionsAsked.splice(questionToDeleteIndex,1)
    const updatedLoggedInUser = await userDao.updateUser(userId,loggedInUserObj);
    console.log("this is delete controller");
    res.json(status);
}


const QuestionController = (app) =>{
    console.log("this is controller")

    app.post('/api/questions', createQuestion);
    app.get('/api/questions', findQuestion);
    // app.put('/api/user/:uid', updateUser);
    app.delete('/api/questions/:qid', deleteQuestion);
}
export default QuestionController;