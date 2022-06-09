import './NavBar.css';
import Menu from '../Menu/Menu'
import CartWidget from '../CartWidget/CartWidget';
import {Link} from "react-router-dom"


function NavBar () {

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
                <CartWidget/>
            </div>
        </nav>
        </>
    );
}

    export default NavBar;