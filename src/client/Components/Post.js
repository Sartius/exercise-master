import React, { useState } from 'react';
import classes from './Post.css';
import InputPost from './InputPost';

const Post = ( props ) => {
    // state = {
    //     showAnswer = false;
    // }

    const [showchild, setshowchild] = useState(false);
    const [showreply, setshowreply] = useState(false);
    const toggleAnswer = () => {
        setshowchild(!showchild)
    }
    const toggleReply = () => {
        setshowreply(!showreply)
    }

    return (
        <div className="Post" style={{"marginLeft": "25px", "marginTop": "10px"}}>
            <div>{props.post.insert_date} I {props.post.author}</div>
            <h1>{props.post.title}</h1>
            <p>{props.post.text}</p>
            <button onClick={(e) => toggleAnswer(e)}>Answer</button> 
            {
                showchild ? props.subposts.map( (post) => {

                    let subposts = [];
                    props.allPosts.forEach(nestedPost => {
                        if(nestedPost.parent === post.id){
                            subposts.push(nestedPost);
                        }
                    });
                    return <Post post = {post} subposts={subposts} allPosts={props.allPosts}/>
                }): null
            }
            <button onClick={(e) => toggleReply(e)}>Reply</button>
            {/* {
                showreply ? 
                    return <InputPost >
            } */}
        </div>
        
    );
}

export default Post;