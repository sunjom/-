'use client'

import { BorderWrapper, InputWrapper, LoginWrapper } from "@/component/Login/Css/LoginComponentCss";
import LoginForm from "@/component/Login/LoginForm";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
    const navigate = useRouter();

    const handleSignUp = () => {
        navigate.push('/SignUp');
    }

    return (
        <LoginWrapper>
            <BorderWrapper>
                <h2>로그인</h2>
                <LoginForm />
                <p>아이디/비밀번호 찾기</p>
                <p onClick={handleSignUp}>회원가입</p>
            </BorderWrapper>
        </LoginWrapper>
    )
}