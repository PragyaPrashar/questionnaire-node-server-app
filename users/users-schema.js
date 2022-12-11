import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
                                 _id: String,
                                 username: String,
                                 user_profile_pic: {data: Buffer, contentType: String},
                                 user_status: String,
                                 dob: String,
                                 address: String,
                                 password:  String,
                                 questionsAsked: {type: Array, of: Number},
                                 answersAnswered: {type:Array, of:Number},
                                 followers: {type: Array, of: Number},
                                 following: {type: Array, of: Number},
                                 comments: {type: Array, of: Number}}

    ,
                             {collections: 'users'});
export default userSchema;
