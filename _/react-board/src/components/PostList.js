import React from 'react';

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="post-list-container">
        <div className="no-posts">
          <p>등록된 게시글이 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="post-list-container">
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