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

    const handleNameChange = (e) =>{
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
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        if(e.target.validity.valid){
            setEmailError(false);
        }else{
            setEmailError(true);
        }
    }
    const handleNickNameChange = (e) =>{
        setNickName(e.target.value);
        if(e.target.validity.valid){
            setNickNameError(false);
        }else{
            setNickNameError(true);
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
        if(res.ok){
            alert('회원가입 완료');
            router.push('/Login');
        }else{
            alert(data.message);
            setIsLoading(false);
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
                onChange={handleNameChange}
                error={idError}
                helperText={idError ? '아이디를 입력해주세요.(영문)' : ''}
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
                helperText={passwordError ? '비밀번호를 입력해주세요.(6자 이상 영문)' : ''}
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
                helperText={emailError ? '이메일을 입력해주세요.' : ''}
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
                helperText={nickNameError ? '닉네임을 입력해주세요.' : ''}
            />

            <Button 
                variant="contained" 
                type="submit" 
                disabled={!isAgree || isLoading}
                sx={{ 
                    position: 'relative',
                    minWidth: '100px',  // 버튼의 최소 너비 설정
                    height: '50px'      // 버튼의 높이 설정
                }}
            >
                {isLoading ? (
                    <CircularProgress 
                        size={24}        // CircularProgress 크기
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