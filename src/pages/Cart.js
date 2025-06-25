import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';
import {
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalPrice,
} from '../features/cart/cartSelectors';

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        padding: '3rem', 
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{ color: '#6c757d', marginBottom: '1rem' }}>Your cart is empty</h2>
        <p style={{ color: '#6c757d' }}>Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h1 style={{ margin: 0, color: '#333' }}>Your Cart</h1>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>
            <strong>Total Items:</strong> {totalItems}
          </p>
          <p style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#007bff' }}>
            <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {cartItems.map((item) => (
          <div key={item.id} style={{ 
            border: '1px solid #dee2e6', 
            borderRadius: '8px',
            padding: '1.5rem',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'translateY(-2px)')}
          onMouseOut={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ 
                  height: '150px', 
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '4px'
                }} 
              />
            </div>
            <h3 style={{ 
              margin: '0 0 1rem 0', 
              fontSize: '1.1rem',
              color: '#333',
              lineHeight: '1.4'
            }}>
              {item.title}
            </h3>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                <strong>Price:</strong> ${item.price}
              </p>
              <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                <strong>Quantity:</strong> {item.quantity}
              </p>
              <p style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: '#007bff' }}>
                <strong>Subtotal:</strong> ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: '100%',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#c82333')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#dc3545')}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

