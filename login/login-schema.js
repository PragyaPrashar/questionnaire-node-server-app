import mongoose from 'mongoose'
const loginSchema = mongoose.Schema({
        _id: String,
        password: {type: String, required:true}
    },{collection: "login"});

loginSchema.virtual('username').get(function() {
    return this._id;
});
export default loginSchema;