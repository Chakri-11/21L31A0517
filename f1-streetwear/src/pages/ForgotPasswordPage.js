import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = ({ onResetPassword }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onResetPassword(email);
      setIsSuccess(true);
    } catch (error) {
      alert('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="login-page">
        <div className="container">
          <div className="login-form-container">
            <h1>Check Your Email</h1>
            <p>We've sent a password reset link to {email}</p>
            <Link to="/login" className="btn btn-primary">Back to Login</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-form-container">
          <h1>Reset Password</h1>
          <p>Enter your email to receive a reset link</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
          
          <div className="login-links">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;