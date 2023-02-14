import React, { useState } from 'react';

const Post = (props) => {

    const [name, setName] = useState('');
    const [newpost, setNewPost] = useState('');
  
    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: newpost
        };
        console.log(newPost)
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={newpost} onChange={(event) => setNewPost(event.target.value)} />
            <button type='submit'> Post Comment </button>
        </form>
    );
}

export default Post;