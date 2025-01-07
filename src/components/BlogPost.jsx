import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../essays/metadata';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { id } = useParams(); // Get ID from URL
  const [content, setContent] = useState('');

  // Find matching post
  const post = posts.find(post => post.id === id);

  // Fetch markdown content
  useEffect(() => {
    if (post) { 
      import(post.path).then(res => {
        fetch(res.default)
        .then(response => response.text())
        .then(text => setContent(text));
      })  
    }
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default BlogPost;