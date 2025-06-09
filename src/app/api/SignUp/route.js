import { RegisterUser } from "@/lib/Controller/userController";
import { connectDB } from "@/lib/databases";
import { User } from "@/lib/Model/user";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        await connectDB;
        const {id,password,email,nickName} = await req.json();

        if(id === '' || password === '' || email === '' || nickName === ''){
            return NextResponse.json({message:"모든 필드를 입력해주세요."}, {status:400});
        }
        const message = [];
        console.log(id,password,email,nickName);
        if(await User.findOne({id:id})){
            message.push("이미 존재하는 아이디입니다.");
        }
        if(await User.findOne({email:email})){
            message.push("이미 존재하는 이메일입니다.");
        }
        if(await User.findOne({nickName:nickName})){
            message.push("이미 존재하는 닉네임입니다.");
        }
        if(message.length > 0){
            return NextResponse.json({message}, {status:400});
        }
        
        const user = await RegisterUser({id,password,email,nickName});
        if(user.message){
            return NextResponse.json(user);
        }
        return NextResponse.json({message:""},{status:200});
    }catch(err){
        console.log(err);
        return NextResponse.json({message:"회원가입 실패",err}, {status:500});
    }
}