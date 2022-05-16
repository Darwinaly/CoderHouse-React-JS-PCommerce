import '../NavBar/NavBar.css';

function Menu () {
    return(
        <>
        <ul className="nav">
			<li><a href="index.html">Procesadores</a>
				<ul>
					<li><a href="index.html">Intel</a></li>
					<li><a href="index.html">Ryzen</a></li>
				</ul>
			</li>
			<li><a href="index.html">Graficas</a>
				<ul>
					<li><a href="index.html">3090</a></li>
					<li><a href="index.html">3080</a></li>
					<li><a href="index.html">1080</a></li>
					<li><a href="index.html">Todas</a></li>
				</ul>
			</li>
            <li><a href="index.html">PC Completas</a>
				<ul>
					<li><a href="index.html">Notebooks</a></li>
					<li><a href="index.html">Gamer</a></li>
					<li><a href="index.html">Diseño</a></li>
				</ul>
			</li>
		</ul>
        </>
    );
}

export default Menu;