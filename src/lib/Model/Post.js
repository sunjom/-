const { Schema, model } = require("mongoose");


const PostSchema = new Schema({
    title:String,
    content:String,
    author:String,
    like:Number,
    disLike:Number,
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

export const Post = model('Post',PostSchema);