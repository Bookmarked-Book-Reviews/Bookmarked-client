import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import useStyles from './NavbarStyling';


export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor:'transparent',boxShadow:'none',color:'black',}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bookmarked
          </Typography>
        <Link to="/" style={{textDecoration:"none" ,color:"black"}}>  <Button color="inherit">Home</Button></Link>
        <Link to="/signup" style={{textDecoration:"none" ,color:"black"}}> <Button color="inherit">SignUp</Button></Link>
        <Link to="/login" style={{textDecoration:"none" ,color:"black"}}><Button color="inherit">Login</Button></Link>
        <Link to="/logout" style={{textDecoration:"none" ,color:"black"}}><Button color="inherit">Logout</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}