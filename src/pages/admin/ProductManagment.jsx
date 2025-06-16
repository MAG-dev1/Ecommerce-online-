import Navbar  from "../../components/Navbar";
import { Link } from 'react-router-dom';
export default function ProductManagment() {
    return (
        <>
            <Navbar/>
            <Link to={'/create'}><button>Crear producto</button></Link>
            <Link to={'/delete'}><button>Borrar Producto</button></Link>
            <Link><button>Editar producto</button></Link>     
        </>
    );
}