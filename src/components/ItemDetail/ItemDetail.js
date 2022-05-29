import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, stock, description}) => {

    const onAdd = (count) => {
        console.log('Add to cart');
    };

    return(
        <div className="contenedorDescription card">
            <img src={img} alt={name} className="card-img-detail"/>
            <h1 className="card-title-detail">{name}</h1>
            <h2 className="price-detail">USD {price}</h2>
            <p className="description-detail">{description}</p>
            <div className="ItemCount"><ItemCount  stock={stock} initial={1} onAdd={onAdd}/></div>
        </div>
    )
}

export default ItemDetail