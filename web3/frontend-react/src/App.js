import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const API_BASE_URL = 'http://localhost:5001/api/posts';

  // get posts
  const fetchPosts = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error occurred while fetching posts:', error);
    }
  };

  // create post
  const createPost = async (postData) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const newPost = await response.json();
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error('Error occurred while creating post:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <main className="App-main">
        <PostList posts={posts} />
        <PostForm onSubmit={createPost} />
      </main>
    </div>
  );
}

export default App;
