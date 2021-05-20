import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddBookForm() {
    return (
        <div>
            <form noValidate autoComplete="off">

                <TextField required  id="standard-basic" label="Title" /><br/>
                <TextField required  id="standard-basic" label="ISBN" /><br/>
                <TextField required  id="standard-basic" label="Author" /><br/>
                <TextField required  id="standard-basic" label="Language" /><br/>
                <TextField required  id="standard-basic" label="Descrption" /><br/>
                <TextField required  id="standard-number" label="Year Of Publication" />
                <TextField required  id="standard-basic" label="Genre"  helperText="Novel,Essay,Fiction etc."/><br/>
                <TextField required  id="standard-basic" label="Link to Purchase" helperText="Amazon or Flipkart link" /><br/>
                <Button variant="contained" component="label" >Upload Cover Image<input type="file" hidden/></Button><br/>

            </form>
        </div>
    )
}

export default AddBookForm
