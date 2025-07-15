import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { UserContext } from '../context/UserContext.jsx';
import { useContext, useEffect } from 'react';
import { useCarrito } from '../context/CarritoContext.jsx';
import '../css/shoppingCart.css'

function ShoppingCart() {
  const { user } = useContext(UserContext);
  const {carrito} = useCarrito();
  const isAuth = localStorage.getItem('auth') === 'true';

  if (!isAuth) return <Navigate to="/login" />;

  useEffect(() => {

  }, []);
  if (!user) return <Navigate to="/login" />;
  return (
    <div>
        <Navbar props={user}/>
        <h2>Tus productos</h2>
        <div className='products_cart'>
          {carrito.map((p, i) => (
            <div key={i} className='col-12 col-sm-6 col-md-4 product_cart_individual mb-4'>
              <img src={p.image} alt={p.title}/>
              <h2>{p.title}</h2>
              <p>{parseInt(p.price * p.count)}$</p>
              <p>Cantidad:{p.count} Articulo/s</p>
            </div>
          ))}
        {carrito.length > 0 && <button>Comprar</button>}
        </div>
       
    </div>
   
    
);
}

export default ShoppingCart;
