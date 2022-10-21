import React, { useState } from 'react';
import PostList from './components/PostList/PostList';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import './App.css'

function App() {
  
  const [posts, setPosts] = useState([{author: 'JJ Vega', postText: 'Its April Fools Day! Give this a dislike if you really like it. : )'}, {author: 'Arturo', postText: 'Pineapple goes on pizza'}])

  function addNewPost(post){

    let tempPosts = [post, ...posts]

    setPosts(tempPosts)
  }

  return (
    <div>
      <h3 style={{margin: '1em'}}>Social
      <small className='tracker'>Feed</small></h3>
      <div className='background'>
        <CreatePostForm addNewPost={addNewPost} />
        <PostList parentPosts={posts} />
      </div>
    </div>
  );
}

export default App;
