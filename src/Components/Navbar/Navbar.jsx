import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'transparent', boxShadow:'none',color:'black'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bookmarked
          </Typography>
        <Link to="/">  <Button color="inherit">Home</Button></Link>
        <Link to="/about"> <Button color="inherit">About</Button></Link>
        <Link to="/signup"> <Button color="inherit">SignUp</Button></Link>
        <Link to="/login"><Button color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}