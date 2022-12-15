import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
                                       _id: Number,
                                       user_id: String,
                                       time:String,
                                       answers: String,
                                       question_id: Number
                                   },
                                   {collections: 'answers'});
export default userSchema;
