import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setError('Error cargando productos'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className='contenedor_carrito'>
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ProductList;
