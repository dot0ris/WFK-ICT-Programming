import React from 'react';

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="post-list-container">
        <div className="no-posts">
          <p>No posts registered.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="post-list-container">
        <header className="App-header">
        <h1>Post Board</h1>
        </header>
      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList; 