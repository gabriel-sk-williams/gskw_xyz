// import { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/type.css'
import BlogList from '../components/BlogList';

function Home() { 

  return (
    <article>
      <h2 className="darkgrey">notes and identifying treatises</h2>
      
      <BlogList/>
    </article>
  );
}

export default Home;