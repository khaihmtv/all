import { Schema, model } from 'mongoose';

const AuthorSchema = new Schema({
    name:String,
    avatar:String,
    like:Number,
    dislike:Number,
    amountPost:Number
},{timestamps:true});

export default model('Author', AuthorSchema);