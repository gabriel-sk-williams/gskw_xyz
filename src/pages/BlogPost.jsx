import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../essays/metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPost() {
  const { id } = useParams(); // Get ID from URL
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const uri = "https://raw.githubusercontent.com/gabriel-sk-williams/xyz/main/";

  // Find matching post
  const post = posts.find(post => post.id === id);

  async function fetchMarkdown(title) {
    const path = `${uri}${title}.md`
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
    if (post) {
      fetchMarkdown(post.title).then(text => setContent(text));
    }
  }, [post]);


  if (!post) {
    return <div>Post not found</div>;
  }

  // Error
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