import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../UserContext.jsx';
import { useContext } from 'react';

function Home() {
  const [cart, setCart] = useState([]);
  const { user } = useContext(UserContext);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(user.username);
  };

  return (
    
    <div>
      <Navbar props = {user}/>
      <ProductList onAdd={handleAddToCart} />
      <Cart items={cart} />
    </div>
  );
}

export default Home;
