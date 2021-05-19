import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function AddBookForm() {
    return (
        <div>
            <form noValidate autoComplete="off">

                <TextField required  id="standard-basic" label="Title" />
                <TextField required  id="standard-basic" label="ISBN" />
                <TextField required  id="standard-basic" label="Author" />
                <TextField required  id="standard-basic" label="Language" />
                <TextField required  id="standard-basic" label="Descrption" />
                <TextField required  id="standard-number" label="Year Of Publication" />
                <TextField required  id="standard-basic" label="Genre"  helperText="Novel,Essay,Fiction etc."/>
                <TextField required  id="standard-basic" label="Link to Purchase" helperText="Amazon or Flipkart link" />
                <Button variant="contained" component="label" >Upload Cover Image<input type="file" hidden/></Button>

            </form>
        </div>
    )
}

export default AddBookForm
