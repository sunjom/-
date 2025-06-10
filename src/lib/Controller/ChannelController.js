import { ZodError } from "zod";
import { Channel } from "../Model/Channel";
import { ChannelSchema } from "../types/zod";
import { connectDB } from "../mongooseDB";

export async function CreateChannel(channel){
    try{
        await connectDB();

        const {title,description,url,owner} = ChannelSchema.parse(channel);
        
        const channels = new Channel({
            title,
            description,
            url,
            owner,
        });
        await channels.save();
        return;
    }catch(err){
        if(err instanceof ZodError){
            const message = []
            for(const e of err.errors){
                message.push(e.message);
            }
            return {message,status:400};
        }
    }
}