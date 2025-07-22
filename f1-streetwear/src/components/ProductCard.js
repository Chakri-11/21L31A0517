import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button 
            className="quick-add-btn"
            onClick={handleAddToCart}
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        
        <div className="product-colors">
          {product.colors.slice(0, 3).map((color, index) => (
            <span 
              key={index}
              className="color-dot"
              style={{ 
                backgroundColor: color.toLowerCase() === 'white' ? '#f5f5f5' : 
                               color.toLowerCase() === 'black' ? '#000000' :
                               color.toLowerCase() === 'red' ? '#ff1744' :
                               color.toLowerCase() === 'blue' ? '#1976d2' :
                               color.toLowerCase() === 'navy' ? '#0d47a1' :
                               color.toLowerCase() === 'gray' ? '#757575' :
                               color.toLowerCase() === 'gold' ? '#ffd700' :
                               color.toLowerCase() === 'orange' ? '#ff5722' :
                               color.toLowerCase() === 'silver' ? '#c0c0c0' :
                               color.toLowerCase()
              }}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="color-more">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;