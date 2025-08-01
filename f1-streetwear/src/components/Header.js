import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemCount, isAuthenticated, user, onLogout }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      onLogout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Speed</span>
          <span className="logo-accent">Wear</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
        </nav>

        <div className="header-actions">
          <button 
            className="auth-btn"
            onClick={handleAuthClick}
          >
            {isAuthenticated ? `Hi, ${user?.name}` : 'Login'}
          </button>
          
          <button 
            className="cart-btn"
            onClick={handleCartClick}
          >
            Cart ({cartItemCount})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;