import { Schema, model } from 'mongoose';

const TutSchema = new Schema({
    type:String,
    title:String,
    content:String,
    path:{type:String,required:true}
},{timestamps:true,autoIndex:true});

export default model('Tut', TutSchema)