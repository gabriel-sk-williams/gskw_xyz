// import { useState, useEffect } from 'react'
import '../styles/main.css'
import '../styles/type.css'
import BlogList from '../components/BlogList';

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