import './App.css';
import DislikeButton from './components/DislikeButton/DislikeButton';
import DislikeCount from './components/DislikeCount/DislikeCount';
import React, { useState } from 'react';
import LikeButton from './components/LikeButton/LikeButton';
import LikeCount from './components/LikeCount/LikeCount';
import Post from './components/Post/Post';
import PostList from './components/PostList/PostList';

function App() {
  const [countLikes, setLikeCount] = useState(0)
  const [countDislikes, setCountDislikes] = useState(0)
  const [postList, setPostList] = useState([{name: 'Nicole', post: 'Hello World!!!'}, {name: 'Christian', post: 'Go Eagles!'}])

  function updateClickLikeCount() {
    let newLikeCount = countLikes + 1
    setLikeCount(newLikeCount)
  }

  function updateClickDislikeCount() {
    let newDislikeCount = countDislikes + 1
    setCountDislikes(newDislikeCount)
  }

  function displayPostList(newPost){

    let tempPostList = [newPost, ...postList];

    setPostList(tempPostList)
  }
  return (
    <div className="App">
      <h1>Socialfeed</h1>
      <Post addNewPostProperty = {displayPostList} />
      <PostList parentPost = {postList}/>
      <LikeButton updateClickLikeCount={updateClickLikeCount} />
      <LikeCount currentLikes={countLikes} />
      <DislikeButton updateClickDislikeCount={updateClickDislikeCount} />
      <DislikeCount currentDislikes = {countDislikes} />
    </div>
  );
}

export default App;

