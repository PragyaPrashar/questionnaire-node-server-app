import mongoose from 'mongoose'
const loginSchema = mongoose.Schema({
        _id: String,
        password: {type: String, require:true}
    },{collection: "login"});
export default loginSchema;