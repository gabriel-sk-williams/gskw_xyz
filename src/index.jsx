// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import BlogPost from './pages/BlogPost';
// import Research from './pages/Research';
import Tech from './pages/Tech';
import About from './pages/About';
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
            <Route path="/:id" element={<BlogPost />} />
            {/*<Route path="/research" element={<Research />} />*/}
            <Route path="/tech" element={<Tech />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default Index
