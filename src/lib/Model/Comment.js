const { Schema, model, models } = require("mongoose");

const CommentSchema = new Schema({
    author:String,
    content:String,
    parentComment:String,
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export const Comment = models.Comment || model('Comment',CommentSchema);