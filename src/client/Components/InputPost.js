import React from 'react';
import classes from './InputPost.css'

const inputPost = ( props ) => {
    let newPost = {
        title: " ",
        author: " ",
        text: " "
    }
    const handleChange = (e) => {
        newPost[e.target.name] = e.target.value
        //this.newPost({author: event.target.value})
    console.log(newPost);

    }
    return (
        <div>
            <form className="InputForm">
                <label>
                    Author:
                    <input type="text" name="author" onChange={handleChange} />
                </label>
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label>
                    Post Text:
                    <input type="text" name="text" onChange={handleChange} />
                </label>
            </form>
                <button className="SubmitButton" onClick={(e) => props.handleSubmit(e, newPost)}>Submit</button>
        </div>
    
    );
    
};

export default inputPost;