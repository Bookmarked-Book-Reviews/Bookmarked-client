import React, {useState, useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory} from "react-router-dom";
import {UserContext} from "../app";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://bookmarked.netlify.app/">
        Bookmarked
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  const Login = () => {

          const {state, dispatch} = useContext(UserContext);

          const history = useHistory();
          const {email} = useState('');
          const {password} = useState('');

          const loginUser = async (e) => {
              e.preventDefault();

              const res = await fetch('/login', {
                method:"POST",
                headers:{
                  "Content-Type" : "application/json"
                }, 
                body:JSON.stringify({
                  email,
                  password
                }) 
          });
          const data = res.json();

          if(res.status === 400 || !data) {
            window.alert("Invalid Credentials..!!");
          } else {
            dispatch({type: "USER", payload:true })
            window.alert("Login Successfull");
            history.push("/dashboard");

          }
    } 
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  method="POST" className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={email}
            onChange={(e) => _setEmail(e.target.value)}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => _setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={loginUser}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
               <Link component={RouterLink} to='/signup'>
                  Don't have an account? Sign Up
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}