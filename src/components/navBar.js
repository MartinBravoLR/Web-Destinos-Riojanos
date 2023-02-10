import * as React from 'react';
import { 
    Box,
    Button,
    Container,
    AppBar,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Avatar
   } from "@mui/material";

import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from "../styles/styles"

import {Link} from 'react-router-dom';

import RIOJA from "../images/rioja.png"

const pages = ['Destinos','Mapa'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar sx={{display:{xs:"none",md:"flex"},mr:1}}alt="Remy Sharp" src={RIOJA} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DestinosRiojanos
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link  style={{textDecoration:"none" ,color:"primary"}}to={`/${page}`}>
                    {page}
                    </Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.0,5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Destinos Riojanos
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  style={{textDecoration:"none" ,color:"white"}}to={`/${page}`}>
                    {page}
                    </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
