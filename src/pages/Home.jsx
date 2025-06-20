import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext.jsx';
import { useContext } from 'react';
import { useCarrito } from '../context/CarritoContext.jsx';

function Home() {
  const [products, setProducts] = useState([]);
  const {carrito, agregarProducto, vaciarCarrito} = useCarrito(); 

  const handleAddToCart = (product) => {
    agregarProducto(product);
    console.log(carrito);
  };

  return (
    
    <div>
      <Navbar/>
      <ProductList onAdd={handleAddToCart} />
    </div>
  );
}

export default Home;
