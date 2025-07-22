import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in (simplified - in real app would verify token)
    const savedUser = localStorage.getItem('f1-streetwear-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    // Simplified login - in real app would make API call
    const userData = {
      id: 1,
      email,
      name: email.split('@')[0],
      loginTime: new Date().toISOString()
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('f1-streetwear-user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const signup = (email, password, name) => {
    // Simplified signup - in real app would make API call
    const userData = {
      id: Date.now(),
      email,
      name,
      signupTime: new Date().toISOString()
    };
    
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('f1-streetwear-user', JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('f1-streetwear-user');
  };

  const resetPassword = (email) => {
    // Simplified password reset - in real app would send OTP
    return Promise.resolve({ message: 'OTP sent to email' });
  };

  return {
    isAuthenticated,
    user,
    login,
    signup,
    logout,
    resetPassword
  };
};