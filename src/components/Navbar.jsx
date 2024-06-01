import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

//MUI
import {Button, Container, Box, Typography, CssBaseline, ListItemText, Switch} from "@mui/material"
import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from '../themes'


//NAVBAR
//imagen
import logo from "/images/logo.png"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
/* import Switch from '@mui/material/Switch'; */
/* import FormControlLabel from '@mui/material/FormControlLabel'; */
/* import FormGroup from '@mui/material/FormGroup'; */
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMore } from '@mui/icons-material'
import LocalBarIcon from '@mui/icons-material/LocalBar';



function Navbar({darkMode, handleThemeChange}) {
 
  

//de mui
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] =useState(false)

//SE QUITA

  /* const handleChange = (event) => {
    setAuth(event.target.checked);
  }; */

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (open) => (event) =>{
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")){
      return
    }
    setDrawerOpen(open)
  }

//LOGIN
    const {authenticateUser, isLoggedIn} = useContext
    (AuthContext)
    const navigate = useNavigate()

    //Cerrar Sesión
    const handleLogOut = async() =>{
        localStorage.removeItem("authToken")
        await authenticateUser()
        navigate("/login")
    }
  
    const drawer = (
      <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
        <List>
        <img className="shake" src={logo} width={"120px"}/>
          <ListItem button component={Link} to="/create-cocktail">
            <ListItemText primary="Crea tu Cocktail" />
          </ListItem>
            <ListItem button component={Link} to="/cocktail-list">
              <ListItemText primary="Lista de Cocktails" />
            </ListItem>
            <ListItem button component={Link} to="/bars">
              <ListItemText primary="Coctelerias" />
            </ListItem>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore/>}
              aria-controls='panel1a-content'
              id="panel1a-header">
                <Typography>Artículos</Typography>
                
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem button component={Link} to="/articles/utensils">
                    <ListItemText primary="Utensilios" />
                  </ListItem>
                  <ListItem button component={Link} to="/articles/ice">
                    <ListItemText primary="Hielo" />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

        </List>
      </Box>
    )



  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className="shake" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{color: 'inherit'}}>
        Shake It!
        </Link>
        </Typography>
        <Switch color="inherit" onClick={handleThemeChange}>{darkMode ? "Light Mode" : "Dark Mode"}
        </Switch>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <LocalBarIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      {drawer}
    </Drawer>
  </Box>
  /* 
    <nav>
        <Link to="/">Home</Link>
        {isLoggedIn === false && <>
        <Link to="/signup">Register</Link>
        <Link to="/login">Login</Link>
        </>}
        {isLoggedIn === true && <>
        <Link to="/profile">Profile</Link>
        <Link onClick={handleLogOut}>Log Out</Link>
        </>}
    </nav>
        */
  )
}



/*
<AppBar position="static"></AppBar>
<FormGroup>
<FormControlLabel
control={
  <Switch
  checked={auth}
  onChange={handleChange}
  aria-label="login switch"
  />
}
label={auth ? 'Logout' : 'Login'}
/>
</FormGroup>
*/
export default Navbar
