import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const App: React.FC = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState<boolean>(true);

  const handleLogin = (username: string, password: string) => {
    // Perform authentication logic here (e.g., send credentials to a server)
    // For simplicity, just log the credentials for now
    console.log('Login with:', { username, password });
  };

  const handleSignup = (username: string, password: string) => {
    // Perform signup logic here (e.g., send signup request to a server)
    // For simplicity, just log the signup credentials for now
    console.log('Signup with:', { username, password });
  };

  const handleSignupLinkClick = () => {
    setLoginFormVisible(false);
  };

  const handleBackToLogin = () => {
    setLoginFormVisible(true);
  };

  return (
    <div className="container">
      <div className="card">
        {isLoginFormVisible ? (
          <>
            <h1 className="heading">Login Page</h1>
            <LoginForm onLogin={handleLogin} onSignupLinkClick={handleSignupLinkClick} />
          </>
        ) : (
          <>
            <h1 className="heading">Sign Up Page</h1>
            <SignupForm onSignup={handleSignup} />
            <p className="signupLink" onClick={handleBackToLogin}>
              Back to login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;



