import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { selectIsLoggedIn, selectUsername } from '../features/auth/authSelectors';
import { selectCartTotalItems } from '../features/cart/cartSelectors';

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUsername);
  const cartItemCount = useSelector(selectCartTotalItems);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    alert('You have been logged out successfully.');
    navigate('/login');
  };

  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'lightyellow',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ margin: 0, color: '#333' }}>MyCart</h2>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}
      >
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link></li>
        
        {isLoggedIn && (
          <li><Link to="/products" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Products</Link></li>
        )}

        <li><Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>About</Link></li>
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</Link></li>

        {isLoggedIn && (
          <li style={{ position: 'relative' }}>
            <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>
              Cart
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-12px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        )}

        {isLoggedIn && username && (
          <li style={{ 
            fontWeight: 'bold', 
            color: '#007bff',
            padding: '0.5rem 1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px',
            border: '1px solid #dee2e6'
          }}>
            Welcome, {username}
          </li>
        )}

        {!isLoggedIn && (
          <li><Link to="/login" style={{ textDecoration: 'none', color: '#007bff', fontWeight: '500' }}>Login</Link></li>
        )}

        {isLoggedIn && (
          <li>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c82333')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#dc3545')}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

