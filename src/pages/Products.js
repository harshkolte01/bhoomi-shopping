import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { fetchProducts } from '../features/product/productSlice';
import {
  selectAllProducts,
  selectProductStatus,
  selectProductError,
} from '../features/product/productSelectors';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);
  const [addedProductId, setAddedProductId] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1000); // feedback reset
  };

  if (status === 'loading') return <h2>Loading products...</h2>;
  if (status === 'failed') return <h2>{error}</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products Page</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: '1rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ height: '100px' }}
            />
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginTop: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {addedProductId === product.id ? '✔ Added' : 'Add to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 