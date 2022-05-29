import '../NavBar/NavBar.css';
import {Link, NavLink} from 'react-router-dom'

function Menu () {
    return(
        <>
        <ul className="nav">
			<li><Link to="/category/Procesadores">Procesadores</Link>
				<ul>
					<li><Link to='/marca/Intel'>Intel</Link></li>
					<li><Link to='/marca/Ryzen'>Ryzen</Link></li>
				</ul>
			</li>
			<li><Link to="/category/TarjetaGrafica">Tarjetas Graficas</Link>
				<ul>
					<li><Link to='/marca/Gigabyte'>Gigabyte</Link></li>
					<li><Link to='/marca/Asus'>Asus</Link></li>
				</ul>
			</li>
            <li><Link to="/category/PCyNotebooks">PC y Notebooks</Link>
				<ul>
					<li><Link to='/marca/MSI'>MSI</Link></li>
					<li><Link to='/marca/Custom'>Custom</Link></li>
				</ul>
			</li>
		</ul>
        </>
    );
}

export default Menu;