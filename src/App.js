import './App.css';
import DislikeButton from './components/DislikeButton/DislikeButton';
import DislikeCount from './components/DislikeCount/DislikeCount';
import { useState } from 'react';
import Post from './components/Post/Post';
import LikeButton from './components/LikeButton/LikeButton';
import LikeCount from './components/LikeCount/LikeCount';



function App() {
  const [countLikes, setLikeCount] = useState(0)
  const [countDislikes, setCountDislikes] = useState(0)

  function updateClickLikeCount() {
    let newLikeCount = countLikes + 1
    setLikeCount(newLikeCount)
  }

  function updateClickDislikeCount() {
    let newDislikeCount = countDislikes + 1
    setCountDislikes(newDislikeCount)
  }

  return (
    <div className="App">
      <h1>Hello World!!!</h1>
      <Post />
     
      <LikeButton updateClickLikeCount={updateClickLikeCount} />
      <LikeCount currentLikes={countLikes} />
      <DislikeButton updateClickDislikeCount={updateClickDislikeCount} />
      <DislikeCount currentDislikes = {countDislikes} />
    </div>
  );
}

export default App;

