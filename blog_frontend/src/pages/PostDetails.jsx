import React, { useEffect, useState } from 'react';
import { getPostDetails, getComments, toggleLike } from '../services/api';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadPostDetails();
    loadComments();
  }, [id]);

  const loadPostDetails = async () => {
    const data = await getPostDetails(id);
    setPost(data);
  };

  const loadComments = async () => {
    const data = await getComments(id);
    setComments(data);
  };

  const handleLike = async () => {
    await toggleLike(post.id, 1); // Hardcoded user ID for now
    loadPostDetails();
  };

  if (!post) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={handleLike}>{post.is_liked ? 'Unlike' : 'Like'}</button>
      <h3>Comments:</h3>
      <CommentList postId={post.id} />
      {comments.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </div>
  );
};

export default PostDetails;
