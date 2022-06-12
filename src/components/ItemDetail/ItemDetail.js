import './ItemDetail.css'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import CartContext from '../../context/CartContext'


const ItemDetail = ({id, name, price, img, stock, description}) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem, getProduct} = useContext(CartContext)


    const onAdd = (quantity) => {
        setQuantity (quantity)
        addItem({id, name, price, quantity: Number(quantity)})
    };

    return(
        <div className="contenedorDescription card">
            <img src={img} alt={name} className="card-img-detail"/>
            <h1 className="card-title-detail">{name}</h1>
            <h2 className="price-detail">USD {price}</h2>
            <p className="description-detail">{description}</p>
            { quantity > 0 
            ? <Link to='/cart' className="ItemCount FinalizarCompra">Terminar Compra</Link> 
            : <div className="ItemCount"><ItemCount  stock={stock} initial={getProduct(id)?.quantity} onAdd={onAdd}/></div>}
        </div>
    )
}

export default ItemDetail

// {getProduct(id)?.quantity}

// initial={quantity}