import { useState, useEffect } from 'react'
import '../styles/index.css'

// Modern Function Component with Hooks
function Home() {
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
  
    return (
      <article>
        <h1>You a bitch straight up</h1>
      </article>
    );
}

export default Home;