import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#f1f1f1' }}>
      <p>© {new Date().getFullYear()} Shopping App. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 