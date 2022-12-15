import * as userDao from "../users/users-dao.js";
import * as loginDao from "../login/login-dao.js";

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    const loginObj = {
        _id: newUser._id,
        password: newUser.password
    }
    const allUsers = await loginDao.findAll();
    const loginUser = await loginDao.createLoginDetails(loginObj);

    res.json(insertedUser);
}
const RegisterController = (app)=>{
    app.post("/register",createUser)
}
export default RegisterController;