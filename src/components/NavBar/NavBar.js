import './NavBar.css';
import Menu from '../Menu/Menu'
import CartWidget from '../CartWidget/CartWidget';


function NavBar () {

    return(
        <>
        <nav className="navbar navbar-custom">
            <div className="container-fluid align-items-right">
                <h1 className="navTitle">PCommerce</h1>
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