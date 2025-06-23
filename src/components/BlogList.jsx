// import { useState, useEffect } from 'react'
import { posts } from '../support/metadata';
import { Link } from 'react-router-dom'
import Entry from './Entry';
import '../styles/main.css';
import '../styles/type.css';
import '../styles/flex.css';

function BlogList() {

    const [featuredPost, ...regularPosts] = posts;

    return (
        <div>
            <div className="header-gap"/>

            <Link to={`/${featuredPost.id}`} className="featured-card">
                <div className="featured-card-content">
                    <div className="full-height flex-column">
                        <h1 className="">{featuredPost.title}</h1>
                        <img src={`/images/${featuredPost.image}`} alt={featuredPost.title}/>
                        <div className="gap"/>
                        <div className="title-bar">
                            <h4 className="blog-card-subtitle">{featuredPost.subtitle}</h4>
                            <h4 className="blog-card-subtitle">{featuredPost.date}</h4>
                        </div>

                        <div className="stats-bar">
                            <h4 className="blog-card-stats">{featuredPost.wordCount} words</h4>
                            <h4 className="blog-card-stats">{featuredPost.readTime} read</h4>
                        </div>
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