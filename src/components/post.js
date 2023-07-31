import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <img
        src={URL.createObjectURL(post.image)}
        alt={post.caption}
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <p>{post.caption}</p>
    </div>
  );
};

export default Post;
