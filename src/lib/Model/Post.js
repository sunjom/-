const { Schema, model, models } = require("mongoose");


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
    channel:{
        tyep:Schema.Types.ObjectId,
        ref:'Channel',
    }
})

export const Post = models.Post || model('Post',PostSchema);