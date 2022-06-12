import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from "react-router-dom"
import CartContext from '../../context/CartContext';
import Menu from '../Menu/Menu'


const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <>
        <nav className="navbar navbar-custom">
            <div className="container-fluid align-items-right">
                <Link className="navTitle" to="/">PCommerce</Link>
                <Menu/>
                <form className="d-flex">
                    <input className="form-control me-2 float-rigt" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Buscar</button>
                </form>
                {quantity > 0 && <CartWidget/>}
            </div>
        </nav>
        </>
    );
}

    export default NavBar;