const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
    author:String,
    content:String,
    parentComment:String,
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export const Comment = model('Comment',CommentSchema);