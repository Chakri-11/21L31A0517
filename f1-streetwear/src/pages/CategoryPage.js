import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';

const CategoryPage = ({ onAddToCart }) => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(getProductsByCategory(categoryId));

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryNames = {
    tees: 'Tees',
    jackets: 'Jackets',
    caps: 'Caps',
    accessories: 'Accessories',
    limited: 'Limited Edition'
  };

  const categoryName = categoryNames[categoryId] || 'Products';

  return (
    <div className="category-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">{categoryName}</h1>
          <p className="category-subtitle">
            Discover our premium collection of {categoryName.toLowerCase()}
          </p>
        </div>

        {/* Search Input */}
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-section">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              {searchQuery ? (
                <div className="no-results">
                  <h3>No results found for "{searchQuery}"</h3>
                  <p>Try adjusting your search terms or browse all products.</p>
                  <button 
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="no-products">
                  <h3>No products available</h3>
                  <p>This category is currently empty. Check back soon!</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Summary */}
        {filteredProducts.length > 0 && (
          <div className="results-summary">
            <p>
              Showing {filteredProducts.length} of {products.length} products
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;