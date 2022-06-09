import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import CartContext from '../../context/CartContext'

const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem, getProduct} = useContext(CartContext)


    const onAdd = (count) => {
        setQuantity (count)

        addItem({id, name, price, count})
    };

    return(
        <div className="contenedorDescription card">
            <img src={img} alt={name} className="card-img-detail"/>
            <h1 className="card-title-detail">{name}</h1>
            <h2 className="price-detail">USD {price}</h2>
            <p className="description-detail">{description}</p>
            { quantity > 0 
            ? <Link to='/cart' className="ItemCount FinalizarCompra">Comprar Ahora</Link> 
            : <div className="ItemCount"><ItemCount  stock={stock} initial={getProduct.quantity} onAdd={onAdd}/></div>}
        </div>
    )
}

export default ItemDetail

// {getProduct(id)?.quantity}