import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    await loginUser({ 
      username, 
      password, 
      dispatch, 
      navigate, 
      setError,
      login 
    });
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        maxWidth: '400px',
        margin: '4rem auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Login</h2>

      {error && (
        <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
          {error}
        </p>
      )}

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          padding: '0.8rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          cursor: 'pointer',
          marginTop: '1rem',
        }}
      >
        Login
      </button>
    </form>
  );
}

const inputStyle = {
  padding: '0.7rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '1rem',
};