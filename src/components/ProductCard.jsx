import { Link } from 'react-router-dom';
import '../css/products.css'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';

function ProductCard({ product, onAdd }) {
  const { user, setUser } = useContext(UserContext);
  return (

      <div className='card'>
        <h3>{product.title}</h3>
        <img src={product.image} alt={product.title}/>
        <p>${product.price}</p>

        {!user.admin && 
          <button onClick={() => onAdd(product)} className="btn">Agregar al carrito</button>
        }
        
        <Link to={`/product/${product.id}`} className="btn">Ver detalle</Link>
      </div>
     
    
  );
}

export default ProductCard;
