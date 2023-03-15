import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut } from '../Redux/UserSlice';


const NavBar = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch(

    )
    const isAuth = useSelector(state=> state.User.isAuth)
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          {isAuth? <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button as={Link} to='/Add Rapport' color="inherit">Add Rapport</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 25 }}>
          <Button as={Link} to='/Rapport' color="inherit">Rapport Lists</Button>
          </Typography>
          <Button onClick={()=>{dispatch(LogOut())
          navigate('/Login')
         }} color="inherit">LogOut</Button> 
          </>
          : 
          <>
          <Button as={Link} to='/' color="inherit">Register</Button>
          <Button as={Link} to='/Login' color="inherit">Login</Button>
          </> }
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
