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
