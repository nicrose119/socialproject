import React, { useState } from 'react';

const Post = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
  

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.ariaValueMax)} />
            <button type='submit'> Post Comment </button>
        </form>
    );
}

export default Post;