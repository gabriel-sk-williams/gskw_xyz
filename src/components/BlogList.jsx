// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.css'
import '../styles/type.css'
import { posts } from '../essays/metadata';

function BlogList() { 

    return (
        <div>
            {posts?.map(post => (
            <div key={post.id}>
                <Link to={`/${post.id}`} ><h2>{post.title}</h2></Link>
            </div>
            ))}
        </div>
    );
}

export default BlogList;