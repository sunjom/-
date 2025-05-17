import { RegisterUser } from "@/lib/Controller/userController";
import { connectDB } from "@/lib/databases";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        await connectDB;
        const {id,password,email,nickName} = await req.json();

        if(id === '' || password === '' || email === '' || nickName === ''){
            return NextResponse.json({message:"모든 필드를 입력해주세요."}, {status:400});
        }
        
        const user = await RegisterUser({id,password,email,nickName});
        if(user.message){
            return NextResponse.json({message:user.message.split('\n')}, {status:400});
        }
        return NextResponse.json({message:"회원가입 성공",user});
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"회원가입 실패",err}, {status:500});
    }
}