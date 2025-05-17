import { object, z } from "zod";
export const UserSchema = object({
    id:z.string({required_error:"아이디를 입력해주세요."})
    .min(1,"아이디를 입력해주세요."),
    password:z.string({required_error:"비밀번호를 입력해주세요."})
    .min(6,"6자 이상 비밀번호를 입력해주세요.")
    .max(16,"16자 이하 비밀번호를 입력해주세요."),
    nickName:z.string({required_error:"닉네임을 입력해주세요."})
    .min(1,"닉네임을 입력해주세요.")
    .max(15,"15자 이하 닉네임을 입력해주세요."),
    email:z.string({required_error:"이메일을 입력해주세요."})
    .min(1,"이메일을 입력해주세요.")
    .email("이메일 형식으로 입력해주세요."),  
})