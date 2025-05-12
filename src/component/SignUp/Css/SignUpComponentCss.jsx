'use client'

import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const SignUpWrapper = styled.div`
    width:100%;
    
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top: 5%;
`

export const BorderWrapper = styled(Box)`
    width:80%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 10px;
    & > h2{
        font-size: 2rem;
    }
`

export const AgreeWrapper = styled(Box)`
    width: 80%;
    height: 20rem;
    white-space: pre-wrap;
    border:1px solid black;
    overflow-x: auto;
`

export const CheckBoxWrapper = styled(Box)`
    gap: 10px;
    margin-top: 10px;
`

export const TextFieldWrapper = styled(Box)`
    width: 40%;
    display: flex;
    flex-direction: column;

    & > div, & > button{
        margin-top: 30px;
        margin-bottom: 30px;
    }
`