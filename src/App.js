import React, { useState } from 'react';
import PostList from './components/PostList/PostList';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';

function App() {
  
  const [posts, setPosts] = useState([{author: 'JJ Vega', postText: 'Its April Fools Day! Give this a dislike if you really like it. : )'}, {author: 'Arturo', postText: 'Pineapple goes on pizza'}])

  function addNewPost(post){

    let tempPosts = [post, ...posts]

    setPosts(tempPosts)
  }

  return (
    <div>
      <CreatePostForm addNewPost={addNewPost} />
      <PostList parentPosts={posts} />
    </div>
  );
}

export default App;
