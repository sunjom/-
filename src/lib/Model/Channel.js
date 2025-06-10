const { Schema,model, models } = require("mongoose");

const ChannelSchema = new Schema({
    title:String,
    description:String,
    owner:String,
    url:String,
})

export const Channel = models.Channel || model('Channel',ChannelSchema);