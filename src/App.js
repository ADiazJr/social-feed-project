import React, { useState } from 'react';
import PostList from './components/PostList/PostList';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';

function App() {
  
  const [posts, setPosts] = useState([{author: 'JJ Vega', postText: 'Its April Fools Day! Give this a dislike if you really like it. : )'}, {author: 'Arturo', postText: 'Pineapple goes on pizza'}])

  return (
    <div>
      <CreatePostForm setPosts={setPosts} />
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
