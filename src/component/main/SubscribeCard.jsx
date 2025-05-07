import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionAreaStyle, CardMeidaStyle, CardWrapper } from './Css/StyledComponent';
export default function SubscribeCard() {
  return (
    <CardWrapper>
      <CardActionAreaStyle>
        <CardMeidaStyle
          component="img"
          image="file.svg"
          alt="green iguana"
          sx={{width:50, marginTop:2}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionAreaStyle>
    </CardWrapper>
  );
}
