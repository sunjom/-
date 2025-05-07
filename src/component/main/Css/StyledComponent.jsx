'use client'

import { Card, CardActionArea, CardMedia } from "@mui/material";
import styled from "@emotion/styled"

export const HeaderWrapper = styled.header`
  width: 100%;
  height:4rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1rem;
`;

export const HeaderUl = styled.ul`
    width:30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style-type: none;
`

export const MainWapper = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  overflow-x: hidden;
`

export const BannerStyle = styled.div`
  width:80%;
  height: 8rem;
  color:white;
  border: 1px solid black;
  margin-top:1.5rem;
`

export const SubScribeWrapper = styled.div`
  width: 80%;
  text-align: center;

  p{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const SubScribes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  gap: 10px;

`

export const CardWrapper = styled(Card)`
  max-width: 100px;
`
export const CardActionAreaStyle = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardMeidaStyle = styled(CardMedia)`
  width: 50px;
  margin-top: 2px;
`

export const ContentsWrapper = styled.div`
  width: 80%;
  display:grid;
  grid-template-columns: repeat(2,minmax(100px,1fr));
`

export const ContentHeader = styled.header`
  width:90%;
  height:5rem;
  display: flex;
  justify-content: space-between;
`