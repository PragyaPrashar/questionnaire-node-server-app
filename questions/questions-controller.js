import * as questionDao from './questions-dao.js'


const createQuestion = async (req, res) => {
    const newQuestion = req.body;
    console.log("this is before dao")
    const insertedQuestion = await questionDao.createQuestion(newQuestion);
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
    const status=await questionDao.deleteQuestion(questionIdToDelete);
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