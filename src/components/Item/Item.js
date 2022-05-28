import './Item.css'


const Item = ({id, name, price, img, stock}) => {

    return(
        <div className="contenedorProducto card border-info mb-3">
            <img src={img} alt={name} className="card-img-top"/>
            <h1 className="card-title">{name}</h1>
            <h2 className="price">USD {price}</h2>
            <button type="button" className="btn btn-primary">Ver Mas</button>
        </div>
    )
}

export default Item