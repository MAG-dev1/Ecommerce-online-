import { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

function ProductList({ search, onAdd }) {
  const { products, error } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // o el número que prefieras

  if (error) return <p>{error}</p>;

  const filteredProducts = products.filter(p => {
    if (search.filter && search.filter !== "") {
      return p.title.toLowerCase().includes(search.filter);
    }
    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-3 align-self-center ">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ⬅
        </button>

        <span className="text-black text-center  mx-2">Página {currentPage} de {totalPages}</span>

        <button

          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          ➡
        </button>
      </div>
      <div className='contenedor_carrito'>
        {currentProducts.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>


    </>
  );
}

export default ProductList;
