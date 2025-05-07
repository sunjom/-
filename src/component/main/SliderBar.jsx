import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function SliderBar() {
  return (
    <Stack spacing={2} sx={{marginTop: '20px'}}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
