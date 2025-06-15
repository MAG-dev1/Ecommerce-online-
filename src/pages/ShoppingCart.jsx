import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { UserContext } from '../context/UserContext.jsx';
import { useContext, useEffect } from 'react';
import { useCarrito } from '../context/CarritoContext.jsx';
import '../css/ShoppingCart.css'

function ShoppingCart() {
  const { user } = useContext(UserContext);
  const {carrito} = useCarrito();
  const isAuth = localStorage.getItem('auth') === 'true';

  if (!isAuth) return <Navigate to="/login" />;

  useEffect(() => {

  }, []);
  console.log(carrito);
  return (
    <div>
        <Navbar props={user}/>
        <h2>Tus productos</h2>
        <div className='products_cart'>
          {carrito.map((p, i) => (
            <div key={i} className='product_cart_individual'>
              <img src={p.image} alt={p.title}/>
              <h2>{p.title}</h2>
              <p>{p.price}$</p>
              <p>Cantidad:{p.count} Articulo/s</p>
            </div>
          ))}
          
        </div>
    </div>
    
);
}

export default ShoppingCart;
