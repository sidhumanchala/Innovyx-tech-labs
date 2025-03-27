import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api'; // Update if using a different port

// Get all posts
export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts/`);
  return response.data;
};

// Get post details
export const getPostDetails = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}/`);
  return response.data;
};

// Create a new post
export const createPost = async (postData) => {
    console.log("Sending Data:", postData);  // <-- Check payload before sending
    const response = await axios.post(`${API_URL}/posts/`, postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  };
  

// Update a post
export const updatePost = async (id, postData) => {
  const response = await axios.put(`${API_URL}/posts/${id}/`, postData);
  return response.data;
};

// Delete a post
export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/posts/${id}/`);
};

// Like/Unlike a post

export const toggleLike = async (postId, userId) => {
    const response = await axios.post(`${API_URL}/likes/`, { post: postId, user: userId });
    return response.data;
  };
  
  export const getComments = async (postId) => {
    const response = await axios.get(`${API_URL}/comments/?post=${postId}`);
    return response.data;
  };
  
  // Add a comment
  export const addComment = async (commentData) => {
    const response = await axios.post(`${API_URL}/comments/`, commentData);
    return response.data;
  };
  