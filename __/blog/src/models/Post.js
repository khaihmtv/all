import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    view:Number,
    title:String,
    content:String,
    comment:Array,
    clip:Array,
    tree:Object,
},{timestamps:true});

export default model('Post', PostSchema)
