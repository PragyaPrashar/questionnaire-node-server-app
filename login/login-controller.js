const checkIfUserIsRegistered = (req,res)=>{

    const loginDetails = req.body;
    console.log(loginDetails);


}


const LoginController = (app)=>{


    app.post("/signin",checkIfUserIsRegistered)

}

export default LoginController;