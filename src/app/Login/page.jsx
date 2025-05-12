'use client'

import { BorderWrapper, InputWrapper, LoginWrapper } from "@/component/Login/Css/LoginComponentCss";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    
    const navigate = useRouter();

    const handleSignUp = () => {
        navigate.push('/SignUp');
    }

    return (
        <LoginWrapper>
            <BorderWrapper>
                <h2>로그인</h2>
                <InputWrapper>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        >
                        <TextField name="id" label="아이디" variant="standard" />
                        <TextField name="password" label="비밀번호" variant="standard" />
                    </Box>
                    <Button variant="contained">로그인</Button>
                </InputWrapper>
                <p>아이디/비밀번호 찾기</p>
                <p onClick={handleSignUp}>회원가입</p>
            </BorderWrapper>
        </LoginWrapper>
    )
}