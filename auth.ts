import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginUser } from "./src/lib/Controller/userController";
import {MongoDBAdapter} from '@auth/mongodb-adapter'
import { connectDB } from "./src/lib/databases";
//import {saltAndHashPassword} from "@/utils/password" hash 함수.
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter:MongoDBAdapter(connectDB),
  providers: [
    Credentials({
      credentials:{
        id:{label:"아이디",type:"text"},
        password:{label:"비밀번호",type:"password"},
      },
      authorize:async(credentials)=>{
        let user = null;

        user = await LoginUser({id:credentials.id,password:credentials.password});
        
        if(user.message){
          throw new Error(user.message);
        }
        return user;
      }
    })
  ],
  session:{
    strategy:"jwt",
    maxAge:60*60*2,
  },
  callbacks:{
    async jwt({token,user}){
      if(user){
        token.id = user.id;
        token.nickName = user.nickName;
      }
      return token;
    },
    async session({session,token}){
      session.user.id = token.id as string;
      session.user.nickName = token.nickName as string;
      return session;
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
})