import { NextResponse } from "next/server";
import { connectDB } from "../databases";
import { ZodError } from "zod";
import { UserSchema } from "../types/zod";
import { comparePassword, hashPassword } from "../hash/hashConvert";

export async function RegisterUser(user){
    try{
        const client = await connectDB;
        const db = client.db('Gallery');
        const userData = db.collection('User');
        
        const {id,password,nickName,email} = UserSchema.parse(user);

        const hashedPassword = await hashPassword(password);
        if(await userData.findOne({id:id})){
            return {message:"이미 존재하는 아이디입니다.",status:400};
        }
        if(await userData.findOne({email:email})){
            return {message:"이미 존재하는 이메일입니다.",status:400};
        }
        if(await userData.findOne({nickName:nickName})){
            return {message:"이미 존재하는 닉네임입니다.",status:400};
        }
        const result = await userData.insertOne({id,password:hashedPassword,nickName,email});
        return result;
    }catch(err){
        if(err instanceof ZodError){
            const message = err.errors.map(e => `${e.path}:${e.message}`).join("\n");
            return {message,status:400};
        }
        console.log(err);
        
    }
}

export async function LoginUser(user){
    try{
        const client = await connectDB;
        const db = client.db('Gallery');
        const userData = db.collection('User');
        const findUser = await userData.findOne({id:user.id});
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