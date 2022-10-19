import React, { useState } from 'react';
import Post from './components/Post/Post';
import PostList from './components/PostList/PostList';

function App() {
  
  const [posts, setPosts] = useState([{author: 'JJ Vega', postText: 'Its April Fools Day! Give this a dislike if you really like it. : )'}])

  return (
    <div>
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
