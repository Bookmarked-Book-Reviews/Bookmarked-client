import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory } from 'react-router-dom';
import axios from 'axios';   







const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow:1,
      },
    },
  }));


function AddBookForm() {

    const classes = useStyles();
    const history =useHistory();


    const [book,setBook]=useState({
        title:"", isbn:"", author:"", language:"", description:"",year:"",genre:"",
      });
  
      let name,value;
      const handleBook=(e)=>{
          name=e.target.name;
          value=e.target.value;
  
          setBook({...book,[name]:value});
      }
  
    
    const postBook=(e)=>{
        
        e.preventDefault();
        const {title,isbn,author,language,description,year,genre}=book;
        
        axios.post(`https://book-marked.herokuapp.com/create`,{
            title,isbn,author,language,description,year,genre
        },).then(
             window.alert("Book Created Successfully")
        )

        history.push("/dashboard")
    }


  
  
    return (
        <div>
           <Grid container justify="center" alignItems="center">
              
                <div>
                <Grid item xs={12} >
                <form className={classes.root} noValidate autoComplete="off">
                    
                
                    <TextField required  name="title" id="standard-basic" label="Title" value={book.title} onChange={handleBook} variant="outlined"/><br/>
                    <TextField required  name="isbn" id="standard-basic" label="ISBN" value={book.isbn} onChange={handleBook} variant="outlined" /><br/>
                    <TextField required  name="author" id="standard-basic" label="Author" value={book.author} onChange={handleBook} variant="outlined"/><br/>
                    <TextField required  name="language" id="standard-basic" label="Language" value={book.language} onChange={handleBook} variant="outlined" /><br/>
                    <TextField required  name="description" id="standard-multiline-flexible" value={book.description} label="Descrption" onChange={handleBook} multiline variant="outlined" /><br/>
                    <TextField required  name="year" id="standard-number" label="Year Of Publication" value={book.year} onChange={handleBook}variant="outlined" type="number" /><br/>
                

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Genre</FormLabel>
                        <RadioGroup row={true} aria-label="Genre" name="genre" value={book.genre}  onChange={handleBook}>
                            <FormControlLabel value="Novel" control={<Radio />} label="Novel" />
                            <FormControlLabel value="Essay" control={<Radio />} label="Essay" />
                            <FormControlLabel value="Fiction" control={<Radio />} label="Fiction" />
                        </RadioGroup>
                    </FormControl><br/>

                    <Button variant="contained" type color="secondary" onClick={postBook}> Submit </Button>
                </form>
                </Grid>
                </div>   
            </Grid>
        </div>
    )
}

export default AddBookForm
