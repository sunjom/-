'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';
import { Pagination, Stack } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: theme.spacing(2),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
    cursor: 'pointer',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, path) {
  return { name, path};
}

const rows = [
  createData('Frozen yoghurt', '/desserts/frozen-yoghurt'),
  createData('Ice cream sandwich', '/desserts/ice-cream'),
  createData('Eclair', '/desserts/eclair'),
  createData('Cupcake', '/desserts/cupcake'),
  createData('Gingerbread', '/desserts/gingerbread'),
];

export default function Contents() {

    const router = useRouter();

    const handleClick = (path) => {
        router.push(path);
    }

  return (
    <>
      <TableContainer component={Paper} sx={{ width: '80%' }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell onClick={() => handleClick('/')}>
                  <p style={{fontSize: '1.5rem', margin:0, fontWeight:'bold', cursor:'pointer'}}>
                      마비노기
                  </p>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name} onClick={() => handleClick(row.path)}>
                <StyledTableCell component="th" scope="row">
                  <p style={{fontSize: '1rem', margin:0}}>{row.name}</p>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{marginTop: '20px'}}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
    </>
  );
}