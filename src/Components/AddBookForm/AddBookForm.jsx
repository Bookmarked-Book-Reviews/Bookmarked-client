import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function AddBookForm() {

    const [title, setTitle] = useState('Title');
    const [isbn, setIsbn] = useState('ISBN');
    const [author, setAuthor] = useState('Author');
    const [language, setLanguage] = useState('Language');
    const [description, setDescription] = useState('Descrption');
    const [year, setYear] = useState('Year Of Publication');
    const [genre, setGenre] = useState('Novel');
    const [link, setLink] = useState('Link to Purchase');




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
            <form noValidate autoComplete="off">
  
                <TextField required  id="standard-basic" label="Title" value={title} onChange={titleChange} /><br/>
                <TextField required  id="standard-basic" label="ISBN" value={isbn} onChange={isbnChange} /><br/>
                <TextField required  id="standard-basic" label="Author" value={author} onChange={authorChange} /><br/>
                <TextField required  id="standard-basic" label="Language" value={language} onChange={languageChange} /><br/>
                <TextField required  id="standard-multiline-flexible" value={description} label="Descrption" onChange={descriptionChange} /><br/>
                <TextField required  id="standard-number" label="Year Of Publication" value={year} onChange={yearChange} /><br/>
               

                <FormControl component="fieldset">
                    <FormLabel component="legend">Genre</FormLabel>
                    <RadioGroup aria-label="Genre" name="genre" value={genre}  onChange={genreChange}>
                        <FormControlLabel value="Novel" control={<Radio />} label="Novel" />
                        <FormControlLabel value="Essay" control={<Radio />} label="Essay" />
                        <FormControlLabel value="Fiction" control={<Radio />} label="Fiction" />
                    </RadioGroup>
                 </FormControl>


                <TextField required  id="standard-basic" label="Link to Purchase" helperText="Amazon or Flipkart link" value={link} onChange={linkChange} /><br/>
                <Button required variant="contained" component="label" startIcon={<CloudUploadIcon />} >Upload Cover Image<input type="file" hidden/></Button><br/>
                <Button variant="contained" type color="secondary"> Submit </Button>
            </form>
        </div>
    )
}

export default AddBookForm
