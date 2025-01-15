// import { useState, useEffect } from 'react'
import { posts } from '../essays/metadata';
import { Link } from 'react-router-dom'
import Entry from './Entry';
import '../styles/main.css';
import '../styles/type.css';

function BlogList() {

    const [featuredPost, ...regularPosts] = posts;

    return (
        <div>
            <div className="header-gap"/>

            <Link to={`/${featuredPost.id}`} className="featured-card">
                <div className="featured-card-content">
                    <h1 className="">{featuredPost.title}</h1>
                    <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className=""
                    />
                    <div className="gap"/>
                    <div>
                        <h4 className="blog-card-subtitle">{featuredPost.subtitle}</h4>
                        <h4 className="blog-card-subtitle">{featuredPost.date}</h4>
                        <h4 className="blog-card-subtitle">{featuredPost.wordCount}</h4>
                    </div>
                </div>
            </Link>

            {regularPosts?.map(post => (
                <div key={post.id}>
                    <Entry key={post.id} {...post} />
                </div>
            ))}
        </div>
    );
}

export default BlogList;