import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../css/detailview.css';
import Navbar from '../components/Navbar';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const {products} = useContext(ProductContext);

  useEffect(() => {
    console.log(products);
    let product = products.find(p => p.id === id);
    if(product){
      setProduct(product);
    }
    else{
      setProduct(null);
    }

  }, [id, products]);

  if (!product) return <p>Cargando...</p>;

  return (
    <>
      <Navbar />
      <div className='detailed-view'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.image} alt="" />
      </div>
    </>
  );
}

export default ProductDetail;
