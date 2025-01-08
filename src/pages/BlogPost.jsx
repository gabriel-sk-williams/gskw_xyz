import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../essays/metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPost() {
  const { id } = useParams(); // Get ID from URL
  const [content, setContent] = useState('');

  // Find matching post
  const post = posts.find(post => post.id === id);

  // Fetch markdown content
  useEffect(() => {
    import(/* @vite-ignore */post.path).then(res => {
      fetch(res.default)
      .then(response => response.text())
      .then(text => setContent(text));
    })  
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <div className="header-gap"></div>
      <h1>{post.title}</h1>
      <h3>{post.subtitle}</h3>
      <h3>{post.date}</h3>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        /*
        remarkPlugins={[remarkSuperscript]}
        components={{
          superscript: ({children}) => <sup>{children}</sup>,
        }}
        */
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogPost;