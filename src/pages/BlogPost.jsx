import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../essays/metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPost() {
  const { id } = useParams(); // Get ID from URL
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const importMarkdown = async () => {
    try {
      // Use dynamic import with relative path
      const module = await import(`${post.path}`);
      
      // Fetch the markdown content
      const response = await fetch(module.default);
      
      if (!response.ok) {
        throw new Error('Failed to fetch markdown content');
      }
      
      const text = await response.text();
      setContent(text);
    } catch (err) {
      console.error('Error importing markdown:', err);
      setError(err.message);
    }
  };

  // Find matching post
  const post = posts.find(post => post.id === id);

  // Fetch markdown content
  useEffect(() => {
    if (post) {
      //import(/* @vite-ignore */post.path).then(res => {
        /*
        fetch(res.default)
        .then(response => response.text())
        .then(text => setContent(text));
      })
        */
       importMarkdown();
    }
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  if (error) {
    return <div>Error loading post: {error}</div>;
  }

  return (
    <article>
      <div className="header-gap"></div>
      <h1>{post.title}</h1>
      <img src={post.image} alt="boxers"/>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogPost;