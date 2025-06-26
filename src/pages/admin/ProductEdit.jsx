import { useState } from "react";
import Navbar from "../../components/Navbar";
import { ProductService } from '../../core/ProductService'
import '../../css/editProduct.css';
import { Product } from "../../core/Product";

export default function ProductEdit() {
    const [id, setId] = useState('');
    const service = new ProductService();
    const [seller, setSeller] = useState('');
    const [precio, setPrecio] = useState('');
    const [titulo, setTitulo] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const buttonEditHandler = (e) => {
        e.preventDefault();
        let product = new Product(seller, precio, titulo, imagen, descripcion);
        service.put(id, JSON.stringify(product));
    }

    return (
        <>

            <Navbar />
            <form className="form_delete">
                <div className="container_delete">

                    <label>Editar Producto</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="id del producto"
                        required
                    />

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

                    <button onClick={buttonEditHandler}><p>Submit</p></button>


                </div>
            </form>
        </>
    );
}