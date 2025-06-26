import { useState } from "react";
import Navbar  from "../../components/Navbar";
import '../../css/createProduct.css';
import { ProductService } from '../../core/ProductService'
import { Product } from "../../core/Product";

export default function ProductCreate() {
  const [seller, setSeller] = useState('');
  const [precio, setPrecio] = useState('');
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');
    const service = new ProductService();

    const createProductHandle = (e) =>{
        e.preventDefault();
        let product = new Product(seller, precio, titulo, imagen, descripcion);
        service.post(product);
    }

  return (
    <>
      <Navbar />
      <h2>Crear producto</h2>
      <form className="form">
        <div>
        <label>Vendedor:</label>
        <input
          type="text"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
          required
        />

        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label>Imagen (URL):</label>
        <input
          type="text"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />

        <label>Descripción:</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />

        <button onClick={createProductHandle}><p>Submit</p></button>
        </div>
      </form>
    </>
  );
}

