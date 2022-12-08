import mongoose from 'mongoose'
const loginSchema = mongoose.Schema({
        username: {type: String, required: true, unique:true},
        password: {type: String, required:true}
    });
export default loginSchema;