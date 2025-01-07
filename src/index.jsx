// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import Home from './pages/Home.jsx';
import BlogPost from './components/BlogPost';
import BlogList from './components/BlogList';
import './styles/layout.css'

function Index() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="container">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/:id" element={<BlogPost />} />
            {/*<Route path="/about" element={<About />} />*/}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default Index
