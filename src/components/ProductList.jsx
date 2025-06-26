import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

function ProductList({ onAdd }) {
  const { products, error } = useContext(ProductContext);

  if (error) return <p>{error}</p>;
  
  const LoadProducts = (filter) => {
    return products.map(p => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
    ))
  }


  return (
    <div className='contenedor_carrito'>
      {<LoadProducts/>}
    </div>
  );
}

export default ProductList;
