import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    onSubmit(formData);
    setFormData({ title: '', content: '' });
  };

  return (
    <div className="post-form-container">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm; 