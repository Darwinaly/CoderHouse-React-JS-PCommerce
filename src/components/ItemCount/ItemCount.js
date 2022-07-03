import {useState} from "react";
import "./ItemCount.css"

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {


    const [quantity, setQuantity] = useState(initial);


    const handlerAdd = () => {
        if (quantity < stock) setQuantity (quantity + 1);
    }

    const  handlerSubtract = () => {
        if (quantity > 1) setQuantity(quantity -1);
    }


    return(
        <>
        {stock === 0
        ?<p className="sinStock">Sin stock</p>
        :<div className="itemCount" id="itemCount">
            <div className="itemCountButtons" id="itemCountButtons">
                <button onClick={handlerSubtract} className="handlerSubtract" id="handlerSubtract">-</button>
                <div className="count" id="count">{quantity}</div>
                <button onClick={handlerAdd} className="handlerAdd" id="handlerAdd">+</button>
            </div> 
            <button onClick={() => onAdd(quantity)} type="button" className="btn btn-outline-primary">Agregar al carrito</button>
         </div>}
        </>
    );

}

export default ItemCount

