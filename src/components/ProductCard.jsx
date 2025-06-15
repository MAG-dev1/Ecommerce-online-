import { Link } from 'react-router-dom';
import '../css/products.css'

function ProductCard({ product, onAdd }) {
  return (

      <div className='card'>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <p>${product.price}</p>
        <button onClick={() => onAdd(product)} className="btn">Agregar al carrito</button>
        <Link to={`/product/${product.id}`} className="btn">Ver detalle</Link>
      </div>
     
    
  );
}

export default ProductCard;
