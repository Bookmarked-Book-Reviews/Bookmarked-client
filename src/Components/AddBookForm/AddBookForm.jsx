import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
    






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

    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [author, setAuthor] = useState('');
    const [language, setLanguage] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [link, setLink] = useState('');




    const titleChange = (e) => {
                        setTitle(e.target.value);
                            };

    const isbnChange = (e) => {
                        setIsbn(e.target.value);   
                            };

    const authorChange = (e) => {
                         setAuthor(e.target.value);       
                            };

    const languageChange = (e) => {
                    setLanguage(e.target.value);
                        };

    const descriptionChange = (e) => {
                    setDescription(e.target.value);
                        };
    const yearChange = (e) => {
                    setYear(e.target.value);
                        };

    const genreChange = (e) => {
                    setGenre(e.target.value);
                        };

    const linkChange = (e) => {
                         setLink(e.target.value);
                         };



  
  
    return (
        <div>
           <Grid container justify="center" alignItems="center">
              
                <div>
                <Grid item xs={12} >
                <form className={classes.root} noValidate autoComplete="off">
                    
                
                    <TextField required  id="standard-basic" label="Title" value={title} onChange={titleChange} variant="outlined"/><br/>
                    <TextField required  id="standard-basic" label="ISBN" value={isbn} onChange={isbnChange} variant="outlined" /><br/>
                    <TextField required  id="standard-basic" label="Author" value={author} onChange={authorChange} variant="outlined"/><br/>
                    <TextField required  id="standard-basic" label="Language" value={language} onChange={languageChange} variant="outlined" /><br/>
                    <TextField required  id="standard-multiline-flexible" value={description} label="Descrption" onChange={descriptionChange} multiline variant="outlined" /><br/>
                    <TextField required  id="standard-number" label="Year Of Publication" value={year} onChange={yearChange}variant="outlined" type="number" /><br/>
                

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Genre</FormLabel>
                        <RadioGroup row={true} aria-label="Genre" name="genre" value={genre}  onChange={genreChange}>
                            <FormControlLabel value="Novel" control={<Radio />} label="Novel" />
                            <FormControlLabel value="Essay" control={<Radio />} label="Essay" />
                            <FormControlLabel value="Fiction" control={<Radio />} label="Fiction" />
                        </RadioGroup>
                    </FormControl><br/>


                    <TextField required  id="standard-basic" label="Link to Purchase" helperText="Amazon or Flipkart link" value={link} onChange={linkChange} variant="outlined"/><br/>
                    <Button required variant="contained" component="label" startIcon={<CloudUploadIcon />} >Upload Cover Image<input type="file" hidden/></Button><br/>
                    <Button variant="contained" type color="secondary"> Submit </Button>
                </form>
                </Grid>
                </div>   
            </Grid>
        </div>
    )
}

export default AddBookForm
