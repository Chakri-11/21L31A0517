import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleShopAllClick = () => {
    navigate('/products');
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            F1 Inspired
            <span className="hero-accent">Streetwear</span>
          </h1>
          <p className="hero-subtitle">
            Premium racing-inspired clothing for the modern enthusiast
          </p>
          <button className="hero-cta" onClick={handleShopAllClick}>
            View All Products
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1558618666-1c4ab9cd3f5d?w=800&h=600&fit=crop" 
            alt="F1 Racing Car" 
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`category-card ${category.functional ? 'functional' : 'placeholder'}`}
                onClick={() => category.functional && handleCategoryClick(category.id)}
              >
                <div className="category-image">
                  <img 
                    src={getCategoryImage(category.id)} 
                    alt={category.name}
                  />
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                  {category.functional && (
                    <p className="category-action">Shop Now →</p>
                  )}
                  {!category.functional && (
                    <p className="category-placeholder">Coming Soon</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🏎️</div>
              <h3>Racing Inspired</h3>
              <p>Designs inspired by Formula 1 aesthetics and performance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👕</div>
              <h3>Premium Quality</h3>
              <p>High-quality materials and craftsmanship in every piece</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick shipping to get your gear as fast as an F1 pit stop</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get category images
const getCategoryImage = (categoryId) => {
  const images = {
    tees: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop',
    jackets: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop',
    caps: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=200&fit=crop',
    accessories: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop',
    limited: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop'
  };
  return images[categoryId] || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop';
};

export default HomePage;