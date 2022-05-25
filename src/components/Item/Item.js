import ItemCount from '../ItemCount/ItemCount'
import './Item.css'


const Item = ({id, name, price, img, stock}) => {

    const onAdd = (count) => {
        console.log('Add to cart');
    };

    return(
        <div className="contenedorProducto card border-info mb-3">
            <img src={img} alt={name} className="card-img-top"/>
            <h1 className="card-title">{name}</h1>
            <h2 className="price">USD {price}</h2>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item