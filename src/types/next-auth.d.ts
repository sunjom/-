import NextAuth from "next-auth";

declare module "next-auth"{
    interface Session{
        user:{
            id:string;
            nickName:string;
        }& DefaultSession["user"];
    }

    interface User{
        id:string;
        nickName?:string;
    }

    interface JWT{
        id:string;
        nickName?:string;
    }
}