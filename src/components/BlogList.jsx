// import { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/type.css'
import { posts } from '../essays/metadata';
import Entry from './Entry';

function BlogList() {

    return (
        <div>
            <div className="double-break"/>
            {posts?.map(post => (
            <div key={post.id}>
                <Entry key={post.id} {...post} />
            </div>
            ))}
        </div>
    );
}

export default BlogList;