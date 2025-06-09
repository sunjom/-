import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { UserSchema } from "../types/zod";
import { comparePassword, hashPassword } from "../hash/hashConvert";
import { connectDB } from "../mongooseDB";
import { User } from "../Model/user";

export async function RegisterUser(user){
    try{
        await connectDB();
        
        const {id,password,nickName,email} = UserSchema.parse(user);

        const hashedPassword = await hashPassword(password);
        
        const users= new User({
            id,
            password:hashedPassword,
            nickName,
            email,
            subscribes:[],
        })
        const result = await users.save();
        return result;
    }catch(err){
        if(err instanceof ZodError){
            const message = []
            for (const e of err.errors){
                message.push(e.message)
            }
            return {message,status:400};
        }
        console.log(err);
        
    }
}

export async function LoginUser(user){
    try{
        await connectDB();

        const findUser = await User.findOne({id:user.id});
        const result = await comparePassword(user.password,findUser.password);
        
        if(!result){
            console.log(user.password,findUser.password);
            return {message:"아이디 또는 비밀번호가 일치하지 않습니다.",status:400};
        }
        return findUser;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function approveRequest(){
    try{
        await connectDB();
        
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function rejectRequest(){

}