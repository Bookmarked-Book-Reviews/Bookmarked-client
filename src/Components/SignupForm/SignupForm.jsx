import React ,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink ,useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
  export default function SignUpForm() {
    const classes = useStyles();
    const history =useHistory();

    const [user,setUser]=useState({
      name:"", email:"", password:"",
    });

    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    const postData=async(e)=>{
      e.preventDefault();
      
      const {name,email,password}=user;
      const res=await fetch("/signup",{
           
        method:"POST",
        headers:{
          "content-Type" : "application/json"
        },
        body : JSON.stringify({
          name,email,password
        })


      });
      
      const data= await res.json();

      if(res.status===422 || !data)
      {
        window.alert("invalid registration");
      }
      else{
        window.alert("Registration Successful");
      }

      history.push("/login")
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="off"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  value={user.name}
                  onChange={handleInputs}
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={user.email}
                  onChange={handleInputs}
                  name="email"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={user.password}
                  onChange={handleInputs}
                  type="password"
                  id="password"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={postData}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to='/login'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }