import { useState } from "react";
import { TextFieldWrapper } from "./Css/SignUpComponentCss";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
export default function SignUpFormContext({isAgree,isLoading, setIsLoading}){
    const [id,setId] = useState('');
    const [idError,setIdError] = useState(false);
    const [password,setPassword] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState(false);
    const [nickName,setNickName] = useState('');
    const [nickNameError,setNickNameError] = useState(false);

    const router = useRouter();

    const handleIdChange = (e) =>{
        setId(e.target.value);
        setIdError("");
        if(e.target.validity.valid){
            setIdError(false);
        }else{
            setIdError('영문으로 입력해주세요');
        }
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
        setPasswordError("");
        if(e.target.validity.valid){
            setPasswordError(false);
        }else{
            setPasswordError('비밀번호를 입력해주세요.(6~16자 영문)');
        }
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        setEmailError("");
        if(e.target.validity.valid){
            setEmailError(false);
        }else{
            setEmailError("이메일을 입력해주세요.");
        }
    }
    const handleNickNameChange = (e) =>{
        setNickName(e.target.value);
        setNickNameError("");
        if(e.target.validity.valid){
            setNickNameError(false);
        }else{
            setNickNameError('닉네임을 입력해주세요.(1~15자)');
        }
    }

    const sendSignUpData = async (e) =>{
        e.preventDefault();
        setIsLoading(true);

        const form = e.target

        if(!form.checkValidity()){
            form.reportValidity();
            setIsLoading(false);
            return;
        }

        const formData = new FormData(form);
        const user = {
            id:formData.get('id'),
            password:formData.get('password'),
            email:formData.get('email'),
            nickName:formData.get('nickName'),
        }

        const res = await fetch('/api/SignUp',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
            },
        });

        const data = await res.json();

        console.log(data.message);
        console.log(data.message.includes('닉네임'));
        if(data.message.length > 0){
            for(const message of data.message){
                if(message.includes('아이디')){
                    setIdError(message);
                }else if(message.includes('이메일')){
                    setEmailError(message);
                }else if(message.includes('닉네임')){
                    setNickNameError(message);
                }else{
                    setPasswordError(message);
                }
            }
            setIsLoading(false);
        }else{
            alert('회원가입 완료');
            router.push('/Login');
        }
    }

    return(
        <TextFieldWrapper
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={sendSignUpData}
        >
            <TextField
                required
                value={id}
                name="id" 
                label="아이디" 
                variant="standard" 
                onChange={handleIdChange}
                error={idError}
                helperText={idError}
                inputProps={{
                    pattern:"[A-Za-z0-9 ]+",
                }}
            />
            <TextField
                required
                type="password"
                value={password}
                name="password" 
                label="비밀번호" 
                variant="standard" 
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordError}
                inputProps={{
                    pattern:"[A-Za-z0-9~!@#$%^&*\\(\\)_+]{6,}"
                }}
            />
            <TextField
                required
                value={email}
                name="email" 
                label="이메일" 
                variant="standard" 
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError}
                inputProps={{
                    pattern:"[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}$"
                }}
            />
            <TextField
                required
                value={nickName}
                name="nickName" 
                label="닉네임" 
                variant="standard" 
                onChange={handleNickNameChange}
                error={nickNameError}
                helperText={nickNameError }
            />

            <Button 
                variant="contained" 
                type="submit" 
                disabled={!isAgree || isLoading}
                sx={{ 
                    position: 'relative',
                    minWidth: '100px', 
                    height: '50px'      
                }}
            >
                {isLoading ? (
                    <CircularProgress 
                        size={24}       
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                ) : (
                    '회원가입'
                )}
            </Button>
        </TextFieldWrapper>
    )
}