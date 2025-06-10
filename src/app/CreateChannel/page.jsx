'use client'

import { TextFieldWrapper } from "@/component/SignUp/Css/SignUpComponentCss";
import { Button, TextField } from "@mui/material";
import { CreateChannelWrapper } from "./CreateChannelCss";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function CreateChannel(){
    const {data,status} = useSession();
    const router = useRouter();
    const [title,setTitle] = useState('');
    const [titleError,setTitleError] = useState('');
    const [description,setDescription] = useState('');
    const [descriptionError,setDescriptionError] = useState('');
    const [url,setUrl] = useState('');
    const [urlError,setUrlError] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(()=>{
        if(status === "unauthenticated"){
            router.push("/login");
        }
    },[status,router]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setTitleError("");
        if(e.target.validity.valid){
            setTitleError(false);
        }else{
            setTitleError("제목을 입력해주세요.");
        }
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        setDescriptionError("");
        if(e.target.validity.valid){
            setDescriptionError(false);
        }else{
            setDescriptionError("설명을 입력해주세요.");
        }
    }
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        setUrlError("");
        if(e.target.validity.valid){
            setUrlError(false);
        }else{
            setUrlError("URL을 입력해주세요.");
        }
    }

    const sendChannelData = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        if(!form.checkValidity()){
            form.reportValidity();
            setLoading(false);
            return;
        }

        const formData = new FormData(form);

        const Channel = {
            title:formData.get('title'),
            description:formData.get('description'),
            url:formData.get('url'),
            owner:data.user.nickName,
        }

        const res = await fetch('/api/createChannel',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Channel)
        })

    }
    return(
        <CreateChannelWrapper>
            <TextFieldWrapper
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={sendChannelData}
            >
                <h2>제목</h2>
                <TextField
                    required
                    name="title"
                    label="제목"
                    variant="standard"
                    value={title}
                    onChange={handleTitleChange}
                    error={titleError}
                    helperText={titleError}
                />
                <h2>채널 설명</h2>
                <TextField
                    required
                    name="description"
                    label="채널 설명"
                    variant="standard"
                    value={description}
                    onChange={handleDescriptionChange}
                    error={descriptionError}
                    helperText={descriptionError}
                />
                <h2>채널 URL</h2>
                <TextField
                    required
                    name="url"
                    label="URL"
                    variant="standard"
                    value={url}
                    onChange={handleUrlChange}
                    error={urlError}
                    helperText={urlError}
                />
                <p>http://localhost:3000/c/Url 경로로 생성됩니다</p>
                <Button
                    variant="contained" 
                    type="submit" 
                    sx={{ 
                        position: 'relative',
                        minWidth: '100px', 
                        height: '50px'      
                    }}
                >
                    생성
                </Button>
            </TextFieldWrapper>
        </CreateChannelWrapper>
    )
}