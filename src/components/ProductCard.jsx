import { Link } from 'react-router-dom';
import '../css/carrito.css'

function ProductCard({ product, onAdd }) {
  return (

      <div className='card'>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <img src={product.image} alt={product.title}/>
        <button onClick={() => onAdd(product)} className="btn">Agregar al carrito</button>
        <Link to={`/product/${product.id}`} className="btn">Ver detalle</Link>
      </div>
     
    
  );
}

export default ProductCard;
