const { Schema,model } = require("mongoose");

const ChannelSchema = new Schema({
    title:String,
    owner:String,
    url:String,
    post:{
            type:Schema.Types.ObjectId,
            ref:'Post',
        }
    ,
})

export const Channel = model('Channel',ChannelSchema);