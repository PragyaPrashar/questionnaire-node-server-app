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
const followingUser = async (req,res)=>{
    const loggedInUserId = req.params.uid
    const userToFollowId = req.params.anotherUserUid
    let loggedInUser = await userDao.findUserById(loggedInUserId);
    loggedInUser.following.push(userToFollowId);
    const updatedObj = await userDao.updateUser(loggedInUserId,loggedInUser);
    let userToFollow = await userDao.findUserById(userToFollowId);
    userToFollow.followers.push(loggedInUserId)
    const userToFollowUpdatedObj = await userDao.updateUser(userToFollowId,userToFollow);

    loggedInUser = await userDao.findUserById(loggedInUserId);
    res.json(loggedInUser)

}


const unfollowUser = async (req,res)=>{
    const loggedInUserId = req.params.uid
    const userToUnfollowId = req.params.anotherUserUid
    let loggedInUser = await userDao.findUserById(loggedInUserId);
    const indexOfUnfollowedUser=loggedInUser.following.indexOf(userToUnfollowId);
    loggedInUser.following.splice(indexOfUnfollowedUser,1);
    console.log("user to be deleted" +userToUnfollowId)
    const updatedObj = await userDao.updateUser(loggedInUserId,loggedInUser);
    console.log("updated object of logged in user after removing from array" +updatedObj)
    let userToUnfollow = await userDao.findUserById(userToUnfollowId);
    const indexOfLoggedInUser=userToUnfollow.followers.indexOf(loggedInUserId)
    userToUnfollow.followers.splice(indexOfLoggedInUser,1)
    const userToUnfollowUpdatedObj = await userDao.updateUser(userToUnfollowId,userToUnfollow);

    loggedInUser = await userDao.findUserById(loggedInUserId);
    res.json(loggedInUser)

}



const removeUser = async (req,res)=>{
    const loggedInUserId = req.params.uid
    const userToRemoveId = req.params.anotherUserUid
    let loggedInUser = await userDao.findUserById(loggedInUserId);
    const indexOfUnfollowedUser=loggedInUser.followers.indexOf(userToRemoveId);
    loggedInUser.followers.splice(indexOfUnfollowedUser,1);
    console.log("user to be deleted" +userToRemoveId)
    const updatedObj = await userDao.updateUser(loggedInUserId,loggedInUser);
    console.log("updated object of logged in user after removing from array" +updatedObj)
    let userToRemove = await userDao.findUserById(userToRemoveId);
    const indexOfLoggedInUser=userToRemove.following.indexOf(loggedInUserId)
    userToRemove.following.splice(indexOfLoggedInUser,1)
    const userToUnfollowUpdatedObj = await userDao.updateUser(userToRemoveId,userToRemove);

    loggedInUser = await userDao.findUserById(loggedInUserId);
    res.json(loggedInUser)

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
    app.delete('/api/user/:uid/:anotherUserUid', unfollowUser);
    app.delete('/api/removeuser/:uid/:anotherUserUid', removeUser);
    app.get("/api/user/:uid/:anotherUserUid",followingUser)
}
export default UserController;

















