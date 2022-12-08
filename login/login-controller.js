const checkIfUserIsRegistered = (loginObj)=>{


}


const LoginController = (app)=>{


    app.post("/signin",checkIfUserIsRegistered(loginObj))

}

export default LoginController;