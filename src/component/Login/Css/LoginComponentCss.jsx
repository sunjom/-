'use client'

import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoginWrapper = styled.div`
    width:100%;
    height:60%;
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top: 5%;
`

export const BorderWrapper = styled(Box)`
    width:60%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: white;

    & > p{
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

    & > h2{
        font-size: 2rem;
    }

    & > *{
        margin-top: 20px;
        margin-bottom: 15px;
    }
`

export const InputWrapper = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    & > button{
        width: 40%;
    }

    & > form{
        width : 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    & > form > div{
        width: 40%;
    }
`