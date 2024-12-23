import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import Home from './pages/Home.jsx';
import './styles/index.css'

function Index() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/blog" element={<BlogList />} />*/}
            {/*<Route path="/blog/:id" element={<BlogPost />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default Index
