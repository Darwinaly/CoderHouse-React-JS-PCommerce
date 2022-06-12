import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, price, img}) => {

    return(
        <div className="contenedorProducto card">
            <img src={img} alt={name} className="cardImage"/>
            <h1 className="card-title">{name}</h1>
            <h2 className="price">USD {price}</h2>
            <Link className='verMas' to={`/detail/${id}`}>ver mas</Link>
        </div>
    )
}

export default Item

