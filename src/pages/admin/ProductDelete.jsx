import { useState } from "react";
import Navbar  from "../../components/Navbar";
import { ProductService } from '../../core/ProductService'
import '../../css/deleteProduct.css';
export default function ProductCreate(){
    const [id, setId] = useState('');
    const service = new ProductService();

    const deleteProductHandle = (e) => {
        e.preventDefault();
        service.delete(id);
    }

    return(
        <>
    
            <Navbar/>
            <form className="form_delete">
                <div className="container_delete">
                    <label>Borrar Producto</label>
                        <input
                            type="text"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            placeholder="id del producto"
                            required
                        />
                    <button onClick={deleteProductHandle}><p>Submit</p></button>
                </div>
            </form>
        </>
    );
}