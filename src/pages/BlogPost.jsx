import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../support/metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/layout.css';
import '../styles/tooltip.css';

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
      setError(error);
      return
    }
  }

  function addFootnoteTooltips() {
  const footnoteRefs = document.querySelectorAll('a[data-footnote-ref="true"]');
  
    footnoteRefs.forEach(ref => {
      const href = ref.getAttribute('href');
      if (href && href.startsWith('#')) {
        const footnoteId = href.substring(1);
        const footnoteElement = document.getElementById(footnoteId);
      
        if (footnoteElement) {
          // Get the footnote text, excluding the back-reference link
          const backrefLink = footnoteElement.querySelector('a[data-footnote-backref]');
          let footnoteText = footnoteElement.textContent;
          
          if (backrefLink) {
            // Remove the "↩" symbol and any trailing whitespace
            footnoteText = footnoteText.replace(/\s*↩\s*$/, '').trim();
          }
          
          // Also remove the footnote number at the beginning if it exists
          // This regex removes patterns like "(3) " from the start
          footnoteText = footnoteText.replace(/^\(\d+\)\s*/, '');
          
          ref.setAttribute('data-tooltip', footnoteText);
        }
      }
    });
  }

  // Fetch markdown content
  useEffect(() => {
    if (post) {
      fetchMarkdown(post.title).then(text => setContent(text));
    }
  }, [post]);

  useEffect(() => {
    addFootnoteTooltips();
  }, [content]); 


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
      <img src={`/images/${post.image}`} alt={post.image}/>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogPost;