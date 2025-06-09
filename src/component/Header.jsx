'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['구독중인 채널', '모든 채널'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dropdownRef = React.useRef(null);
  const router = useRouter();
  const data = useSession();
  const [open, setOpen] =  React.useState(false);

  const isAdmin = data?.data?.user?.nickName ==='admin';

  const settings = isAdmin ? [{
    title:'Profile',
    handler:() => {}
    }, 
    {
      title:'채널 생성 목록',
      handler:() => {}
    }, 
    {title:'채널생성',
      handler:() => {router.push('/CreateChannel')}
    },
    {
      title:'Logout',
      handler:() => {signOut({callbackUrl:'/'})}
    }] :[
  {
    title:'Profile',
    handler:() => {}
  }, 
  {
    title:'Account',
    handler:() => {}
  }, 
  {title:'채널생성',
    handler:() => {router.push('/CreateChannel')}
  },
  {
    title:'Logout',
    handler:() => {signOut({callbackUrl:'/'})}
  }]

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if(!data.data){
      router.push('/Login');
      return;
    }
    setOpen((prev) => !prev);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   if(!data.data){
  //     router.push('/Login');
  //     return;
  //   }
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavHandlerMenu = (handler) => {
    setAnchorElNav(null);
    handler();
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Gallery
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              disableScrollLock
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Gallery
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center', gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Autocomplete
              freeSolo
              id="search-autocomplete"
              disableClearable
              options={['채널1', '채널2', '채널3', '채널4', '채널5']}
              sx={{ 
                width: 300,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white',
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search',
                    },
                  }}
                />
              )}
            />
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              disableScrollLock
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={()=>handleCloseNavHandlerMenu(setting.handler)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>                
          </Box> */}
          <Box ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
              onClick={handleToggle}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <PersonIcon/>
            </button>

            {open && (
              <List
                style={{
                  position: 'absolute',
                  top: '100%', 
                  left: '-123px',
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '8px 0',
                  width: '160px',
                  zIndex: 1000,
                }}
              >
                <ListItemText sx={{ textAlign: 'center', color: 'black' }}>{data.data?.user.nickName}님</ListItemText>
                <hr/>
                {settings.map((setting) => (
                <ListItemButton key={setting.title} onClick={()=>handleCloseNavHandlerMenu(setting.handler)}>
                  <ListItemText sx={{ textAlign: 'center', color: 'black' }}>{setting.title}</ListItemText>
                </ListItemButton>
                ))}
              </List>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
