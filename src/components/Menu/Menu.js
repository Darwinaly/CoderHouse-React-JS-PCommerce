import '../NavBar/NavBar.css';
import {Link} from 'react-router-dom'

function Menu () {
    return(
        <ul className="nav">
			<li><Link to="/category/Procesadores">Procesadores</Link></li>
			<li><Link to="/category/TarjetaGrafica">Tarjetas Graficas</Link></li>
            <li><Link to="/category/PCyNotebooks">PC y Notebooks</Link></li>
		</ul>
    );
}

export default Menu;