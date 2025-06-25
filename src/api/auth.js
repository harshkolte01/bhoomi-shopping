/**
 * Handles user login with API validation and state management
 * @param {Object} params - Login parameters
 * @param {string} params.username - User's username
 * @param {string} params.password - User's password
 * @param {Function} params.dispatch - Redux dispatch function
 * @param {Function} params.navigate - React Router navigate function
 * @param {Function} params.setError - Function to set error state
 * @param {Function} params.login - Redux login action
 */
export async function loginUser({ username, password, dispatch, navigate, setError, login }) {
  if (!username || !password) {
    setError('Username and Password are required');
    return;
  }

  try {
    const res = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError('Invalid username or password. Use mor_2314/83r5^_');
      return;
    }

    if (data.token) {
      dispatch(login(username));
      navigate('/');
    } else {
      setError('Server response missing token');
    }
  } catch (err) {
    console.error('Login API error:', err);
    setError('Api Error.');
  }
}
