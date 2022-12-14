import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
                                 _id: String,
                                 username: String,
                                 user_profile_pic: String,
                                 user_status: String,
                                 dob: String,
                                 address: String,
                                 password:  String,
                                 questionsAsked: {type: Array, of: Number},
                                 answersAnswered: {type:Array, of:Number},
                                 followers: {type: Array, of: String},
                                 following: {type: Array, of: String},
                                 comments: {type: Array, of: Number}},
                             {collections: 'users'});
export default userSchema;
