import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      navigate('/products');
    } else {
      navigate('/login');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#f7f9fc',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#007bff' }}>MyCart</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', marginBottom: '2rem' }}>
        Your one-stop shop for everything you need! Explore our wide selection of products and enjoy a seamless shopping experience.
      </p>

      <button
        onClick={handleShopNow}
        style={{
          padding: '0.8rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Shop Now
      </button>
    </div>
  );
}


