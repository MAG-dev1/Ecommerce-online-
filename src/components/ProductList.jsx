import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ onAdd }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://684f3618f0c9c9848d2a639d.mockapi.io/Store')
      .then(res => res.json())
      .then(data =>{
        return data.map(p =>({
            ...p,
            count:0
        }));
      })
      .then(data => setProducts(data))
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
