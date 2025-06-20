import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const API_BASE_URL = 'http://localhost:5001/api/posts';

  // 게시글 목록 가져오기
  const fetchPosts = async () => {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('게시글을 가져오는 중 오류 발생:', error);
    }
  };

  // 새 게시글 생성
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
      console.error('게시글 생성 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Post Board</h1>
      </header>
      <main className="App-main">
        <PostList posts={posts} />
        <PostForm onSubmit={createPost} />
      </main>
    </div>
  );
}

export default App;
