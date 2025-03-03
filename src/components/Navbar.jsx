import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>gskw</h1>
      </Link>
      <div className="nav-links">
        <Link to="/"> {/*/"research"*/}
          <h2 className={location.pathname === '/' ? 'active' : ''}>research</h2>
        </Link>
        <Link to="/tech" >
          <h2 className={location.pathname === '/tech' ? 'active' : ''}>tech</h2>
        </Link>
        <Link to="/about" >
          <h2 className={location.pathname === '/about' ? 'active' : ''}>about</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;