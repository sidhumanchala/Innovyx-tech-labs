import { useEffect, useState } from 'react';
import { getComments } from '../services/api';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(postId);
      setComments(data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <small>By User {comment.user}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
