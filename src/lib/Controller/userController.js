import { connectDB } from "../databases";

export async function RegisterUser(user){
    try{
        const client = await connectDB;
        const db = client.db('Gallery');
        const userData = db.collection('User');
        if(await userData.findOne({id:user.id})){
            return {message:"이미 존재하는 아이디입니다."};
        }
        if(await userData.findOne({email:user.email})){
            return {message:"이미 존재하는 이메일입니다."};
        }
        if(await userData.findOne({nickName:user.nickName})){
            return {message:"이미 존재하는 닉네임입니다."};
        }
        const result = await userData.insertOne(user);
        return result;
    }catch(err){
        console.log(err);
        throw err;
    }
}