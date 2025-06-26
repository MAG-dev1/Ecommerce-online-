// ProductContext.jsx
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://684f3618f0c9c9848d2a639d.mockapi.io/Store')
      .then(res => res.json())
      .then(data => {
        const updatedProducts = data.map(p => ({ ...p, count: 0 }));
        setProducts(updatedProducts);
      })
      .catch(() => setError('Error loading products'));
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, error }}>
      {children}
    </ProductContext.Provider>
  );
}
