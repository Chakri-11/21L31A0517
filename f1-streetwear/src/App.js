import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import './App.css';

function App() {
  const cart = useCart();
  const auth = useAuth();

  const handleAddToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    // For quick add (from product cards), use default values
    const size = selectedSize || (product.sizes.length > 0 ? product.sizes[0] : null);
    const color = selectedColor || (product.colors.length > 0 ? product.colors[0] : null);
    
    cart.addToCart(product, quantity, size, color);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          cartItemCount={cart.getCartItemCount()}
          isAuthenticated={auth.isAuthenticated}
          user={auth.user}
          onLogout={auth.logout}
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CategoryPage onAddToCart={handleAddToCart} />} />
            <Route path="/category/:categoryId" element={<CategoryPage onAddToCart={handleAddToCart} />} />
            <Route path="/product/:productId" element={
              <ProductPage 
                onAddToCart={cart.addToCart}
              />
            } />
            <Route path="/cart" element={
              <CartPage 
                cartItems={cart.cartItems}
                onUpdateQuantity={cart.updateQuantity}
                onRemoveItem={cart.removeFromCart}
                cartTotal={cart.getCartTotal()}
                onClearCart={cart.clearCart}
              />
            } />
            <Route path="/login" element={
              <LoginPage 
                onLogin={auth.login}
                isAuthenticated={auth.isAuthenticated}
              />
            } />
            <Route path="/signup" element={
              <SignUpPage 
                onSignUp={auth.signup}
                isAuthenticated={auth.isAuthenticated}
              />
            } />
            <Route path="/forgot-password" element={
              <ForgotPasswordPage 
                onResetPassword={auth.resetPassword}
              />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
