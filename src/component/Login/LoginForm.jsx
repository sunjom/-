import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { FormWrapper, InputWrapper } from "./Css/LoginComponentCss";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
        console.log("QWE");
        const form = e.target;

        if(!form.checkValidity()){
            form.reportValidity();
            setIsLoading(false);
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

        console.log(res.status);
        if(res.ok){
            setError('');
            router.push('/');
        }else{
            setError(data.message);
            setIsLoading(false);
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