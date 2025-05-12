'use client'

import { BorderWrapper, InputWrapper, LoginWrapper } from "@/component/Login/Css/LoginComponentCss";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
    const [id,setId] = useState('');
    const [idError,setIdError] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');
    const navigate = useRouter();

    const handleIdChange = (e) =>{
        setId(e.target.value);
        if(e.target.validity.valid){
            setIdError(false);
        }else{
            setIdError(true);
        }
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        if(e.target.validity.valid){
            setPasswordError(false);
        }else{
            setPasswordError(true);   
        }
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        setIsLoading(true);
        const form = e.target;

        if(!form.checkValidity()){
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);

        const user = {
            id:formData.get('id'),
            password:formData.get('password'),
        }

        const res = await fetch('/api/Login',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
            },
        });

        const data = await res.json();

        if(res.ok){
            navigate.push('/');
        }else{
            setError(data.message);
            setIsLoading(false);
        }
    }

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
                        onSubmit={handleLogin}
                        >
                        <TextField 
                            required
                            value={id}
                            name="id" 
                            label="아이디" 
                            variant="standard" 
                            onChange={handleIdChange}
                            />
                        <div>
                            <TextField 
                                required
                                value={password}
                                name="password" 
                                label="비밀번호" 
                                variant="standard" 
                                onChange={handlePasswordChange} />
                            <p>{error}</p>
                        </div>
                    </Box>
                    <Button variant="contained">로그인</Button>
                </InputWrapper>
                <p>아이디/비밀번호 찾기</p>
                <p onClick={handleSignUp}>회원가입</p>
            </BorderWrapper>
        </LoginWrapper>
    )
}