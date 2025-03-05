import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../essays/metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPost() {
  const { id } = useParams(); // Get ID from URL
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  // const modules = await import.meta.glob('../essays/*.md');

  // Find matching post
  const post = posts.find(post => post.id === id);

  async function fetchMarkdown(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error("Failed to load markdown file");
        return await response.text();
    } catch (error) {
        console.error("Error loading markdown:", error);
        return "Error loading content.";
    }
}

  // Fetch markdown content
  useEffect(() => {

    //if (post) {
    //  import(/* @vite-ignore */post.path).then(res => {
    //  fetch(post.path)
    //    .then(response => response.text())
    //    .then(text => setContent(text))
    //    .catch(error => setError(error));
    //  }
    //}
  if (post) {
    fetchMarkdown(post.path).then(text => setContent(text));

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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogPost;

  /*
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
  */