import { CreateChannel } from "@/lib/Controller/ChannelController";
import { Channel } from "@/lib/Model/Channel";
import { connectDB } from "@/lib/mongooseDB";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB();
        const {title,description,url,owner} = await req.json();
        const message = []
        if(await Channel.findOne({title:title})){
            message.push("이미 채널이 있습니다");
        }
        if(await Channel.findOne({url:url})){
            message.push("이미 해당 URL이 있습니다");
        }
        if(message.length > 0){
            console.log("QWE");
            return NextResponse.json({message},{status:400});
        }
        const result = await CreateChannel({title,description,url,owner});

        if(result.message){
            return NextResponse.json(result);
        }

        return NextResponse.json({message:""}, {status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"채널 생성 실패"},{status:500});
    }
}