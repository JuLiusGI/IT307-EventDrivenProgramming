import React, { useState, ChangeEvent, FormEvent } from 'react';
import { isInputElement } from 'react-router-dom/dist/dom';

interface SignupFormProps {
  onSignup: (username: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Clear any previous error
    setError('');

    // Pass the credentials to the parent component
    onSignup(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="formGroup">
        <label htmlFor="signupUsername" className="label">
          Username:
        </label>
        <input
          type="text"
          id="signupUsername"
          value={username}
          onChange={handleUsernameChange}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="signupPassword" className="label">
          Password:
        </label>
        <input
          type="password"
          id="signupPassword"
          value={password}
          onChange={handlePasswordChange}
          className="input"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="button">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
