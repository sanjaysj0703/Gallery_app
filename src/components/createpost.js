import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (image && caption) {
      const newPost = {
        id: Date.now(),
        image,
        caption,
      };
      setPosts([...posts, newPost]);
      setImage(null);
      setCaption('');
    }
  };

  return (
    <div  className='nav-bar'>
      <h2>Create Post</h2>
      <form onSubmit={handlePostSubmit}>
        <input type="file" onChange={handleImageChange} />
        <textarea
        className='caption'
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Enter caption..."
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
