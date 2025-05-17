const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    id:String,
    password:String,
    nickName:String,
    email:String,
    subscribes:[String],
})

export const User = models.User || model('User',UserSchema);