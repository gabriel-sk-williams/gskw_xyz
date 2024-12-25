// BlogPost.jsx
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Gets the ID from the URL
  
  // If you're keeping posts in a data file:
  const posts = [
    { 
      id: "1",  // IDs should match what you'll use in URLs
      title: "My First Post",
      content: "This is my first blog post..."
    },
    { 
      id: "2",
      title: "My Second Post",
      content: "This is another blog post..."
    }
  ];

  // Find the matching post
  const post = posts.find(post => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}

export default BlogPost;