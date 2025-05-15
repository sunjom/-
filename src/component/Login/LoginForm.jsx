import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { FormWrapper, InputWrapper } from "./Css/LoginComponentCss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function LoginForm(){
    const [id,setId] = useState('');
    const [idError,setIdError] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    const router = useRouter();

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
            setIsLoading(false);
            return;
        }

        const res = await signIn('credentials',{
            id,password,redirect:false,
        })
        console.log(res);
        
        if(res.error){
            setError("아이디 또는 비밀번호가 일치하지 않습니다.");
            setIsLoading(false);
        }else{
            router.push('/');
        }
    }
    return(
        <InputWrapper>
            <FormWrapper
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
                error={idError}
                />
                <div>
                    <TextField 
                    required
                    value={password}
                    name="password" 
                    label="비밀번호" 
                    variant="standard" 
                    onChange={handlePasswordChange} 
                    error={passwordError}
                    />
                    <p>{error ? error : ''}</p>
                </div>
                <Button
                variant="contained"
                type="submit"
                disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} /> : '로그인'}
                </Button>
            </FormWrapper>  
        </InputWrapper>
    )
}