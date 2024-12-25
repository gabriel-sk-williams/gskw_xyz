// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'

function BlogList() { 

    const posts = [
        { id: "on-semantics", title: "On Semantics" },
        { id: "on-units", title: "On Units" },
    ];

    return (
        <div>
            {posts?.map(post => (
            <div key={post.id}>
                <Link to={`/blog/${post.id}`} ><h2>{post.title}</h2></Link>
            </div>
            ))}
        </div>
    );
}

export default BlogList;