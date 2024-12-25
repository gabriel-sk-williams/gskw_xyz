// import { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/type.css'
import BlogList from '../components/BlogList';

// Modern Function Component with Hooks
function Home() { 

  return (
    <article>
      <h2>this is more of a header</h2>
      <h3>favor</h3>
      <h4>dark souls</h4>
      <BlogList/>
    </article>
  );
}

export default Home;

    // const [post, setPost] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    /*
    // const { id } = useParams();
  
    useEffect(() => {
      async function fetchPost() {
        try {
          const response = await fetch(`/api/posts/${id}`);
          const data = await response.json();
          setPost(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      
      fetchPost();
    }, [id]);
    */
  
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;
    // if (!post) return <div>No post found</div>;