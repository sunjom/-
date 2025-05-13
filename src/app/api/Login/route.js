import { LoginUser } from "@/lib/Controller/userController";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {id,password} = await req.json();

        const result = await LoginUser({id,password});
        if(result.message){
            return NextResponse.json({message:result.message}, {status:400});
        }
        return NextResponse.json({message:"로그인 성공",user:result}, {status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"로그인 실패",err}, {status:500});
    }
}