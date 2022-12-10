import {findByUsername} from "./login-dao.js";

const checkIfUserIsRegistered = async (req,res)=>{

    const loginDetails = req.body;
    const username = loginDetails._id;
    console.log("checking if user "+username +" is already registered...");
    const userFromDb = await findByUsername(username);
    res.json("status is "+userFromDb);
    if(userFromDb!==null){
        console.log("User is already present. Checking password In...")
        // res.json(userFromDb);
        if(userFromDb.password!==loginDetails.password){
            console.log("Password doesn't match. Please check the password")
            res.send(401);
        }else{
            console.log("Logging In...")
            res.send(200);
        }
    }else {
        console.log("Cannot login since user is not registered")
        res.send(200);
    }
}


const LoginController = (app)=>{
    app.post("/login",checkIfUserIsRegistered)
}

export default LoginController;