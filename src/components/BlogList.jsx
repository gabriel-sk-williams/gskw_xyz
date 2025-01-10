// import { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/type.css'
import { posts } from '../essays/metadata';
import Entry from './Entry';

function BlogList() {

    return (
        <div>
            {posts?.map(post => (
            <div key={post.id}>
                <Entry key={post.id} {...post} />
            </div>
            ))}
        </div>
    );
}

export default BlogList;