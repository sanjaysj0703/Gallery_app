import React from 'react';
import Post from '../components/post';

const ViewPosts = ({ posts }) => {
  return (
    <div>
      <h2>View Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ViewPosts;
