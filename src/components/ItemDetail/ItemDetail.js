import { Link } from 'react-router-dom'
import { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [quantityOnAdd, setQuantityOnAdd] = useState(0)

    const onAdd = (count) => {
        console.log('Add to cart');
        setQuantityOnAdd (count)
    };

    return(
        <div className="contenedorDescription card">
            <img src={img} alt={name} className="card-img-detail"/>
            <h1 className="card-title-detail">{name}</h1>
            <h2 className="price-detail">USD {price}</h2>
            <p className="description-detail">{description}</p>
            { quantityOnAdd > 0 ? <Link to='/cart' className="ItemCount FinalizarCompra">Comprar Ahora</Link> : <div className="ItemCount"><ItemCount  stock={stock} initial={1} onAdd={onAdd}/></div>}
        </div>
    )
}

export default ItemDetail