import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isLoggedIn, handleSignOut }) => {
  return (
    <nav className="nav-container">
      <div className="nav-brand">Fashion Store</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/catalogue" className="nav-link">Catalogue</Link>
        {isLoggedIn ? (
          <button onClick={handleSignOut} className="nav-button">Sign Out</button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;