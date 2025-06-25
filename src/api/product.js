import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => {
  return axios.get(`${API_URL}/products`);
};

// API calls for products will go here. 