import React from 'react';
import Post from './Post';
import InputPost from './InputPost';
import classes from './Layout.css';

const Playout = ( props ) => {
    return (
        <div>
            {props.posts.map((post, index) => {

                if(post.parent === null) 
                {
                    let subposts = [];
                    props.posts.forEach(nestedPost => {
                        if(nestedPost.parent === post.id){
                            subposts.push(nestedPost);
                        }
                    });

                    return <Post post={post} subposts = { subposts } allPosts={props.posts}/>                
                }

            })}
            <InputPost handleSubmit={props.handleSubmit}/>
        </div>
    );
}

export default Playout;