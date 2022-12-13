import * as userDao from './users-dao.js';
import {findAllUser} from "./users-dao.js";

// const createUser = async (req, res) => {
//     const newUser = req.body;
//     console.log("this is before dao")
//     const insertedUser = await userDao.createUser(newUser);
//     console.log("this is after dao")
//
//     res.json(insertedUser);
// }


const findUserById = async (req, res) => {
    const userIdToFind=req.params.uid;
    const users = await userDao.findUserById(userIdToFind);
    res.json(users);
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.uid;
    const updates = req.body;
    const status = await userDao.updateUser(userIdToUpdate, updates);
    res.json(status);
}

const findAllUsers=async(req, res)=>{
    const users=await userDao.findAllUser();
    res.json(users)
}

//
// const deleteUser = async (req, res) => {
//     const userIdToDelete = req.params.uid;
//     const status = userDao.deleteUser(userIdToDelete);
//     res.send(status);
// }

const UserController = (app) =>{
    console.log("this is controller")

    // app.post('/api/user', createUser);
    app.get('/api/user/:uid', findUserById);
    app.get('/api/user', findAllUsers);
    app.put('/api/user/:uid', updateUser);
    // app.delete('api/user/:uid', deleteUser);
}
export default UserController;

















