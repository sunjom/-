'use client'
import { AgreeWrapper, BorderWrapper, CheckBoxWrapper, SignUpWrapper, TextFieldWrapper } from "@/component/SignUp/Css/SignUpComponentCss";
import { Agree } from "./Agree";
import { Box, Button, Checkbox, TextField, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AgreeContext from "@/component/SignUp/AgreeContext";
import SignUpFormContext from "@/component/SignUp/SignUpFormContext";
export default function SignUp() {

    const [isAgree,setIsAgree] = useState(false);
    const [isLoading,setIsLoading] = useState(false);

    return (
        <SignUpWrapper>
            <BorderWrapper>
                <AgreeContext/>
                <CheckBoxWrapper>
                    <Checkbox id="isAgree" checked={isAgree} onChange={(e)=>setIsAgree(e.target.checked)} />
                    <label htmlFor="isAgree">이용약관에 동의합니다.</label>
                </CheckBoxWrapper>

                <SignUpFormContext
                    isAgree={isAgree}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />
            </BorderWrapper>
        </SignUpWrapper>
    )
}