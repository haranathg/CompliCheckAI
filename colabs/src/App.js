import { useState, useEffect } from 'react';
import './App.css';
import CompliCheckAI from './CompliCheckAI-UI';
import LoginPage from './LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = sessionStorage.getItem('complicheck_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('complicheck_authenticated');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return <CompliCheckAI onLogout={handleLogout} />;
}

export default App;
