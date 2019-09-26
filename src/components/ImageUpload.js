import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {image: ''};
    }
    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            const formData={file:e.target.result}; 
            return(
                axios
                .post('https://lambda-receipt-tracker.herokuapp.com/api//receipts/{id}/upload', formData)
                .then(res => console.log(res)) 
                .catch(err => console.log("image upload error", err))
            ) 
        }
    }

    render() {
        return (
            <div onSubmit={this.onFormSubmit}>
                <input type='file' name='imageFile' onChange={(e)=>this.onChange(e)} />
            </div>
        )
    }

}

export default ImageUpload;