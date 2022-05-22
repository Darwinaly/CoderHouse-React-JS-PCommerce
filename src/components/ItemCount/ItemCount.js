import {useState} from "react";
import "./ItemCount.css"

function ItemCount ({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    const handlerAdd = () => {
        if (count < stock) setCount (count + 1);
    }

    const  handlerSubtract = () => {
        if (count > 0) setCount(count -1);
    }

    const handlerAddToCart = () => {
        onAdd(count); 
    }



    return(
        <div className="itemCount" id="itemCount">
            <div className="itemCountButtons" id="itemCountButtons">
                <button onClick={handlerAdd} className="handlerAdd" id="handlerAdd">+</button>
                <div className="count" id="count"><span >{count}</span></div>
                <button onClick={handlerSubtract} className="handlerSubtract" id="handlerSubtract">-</button>
            </div> 
            <button onClick={handlerAddToCart} type="button" className="btn btn-outline-primary">Agregar al carrito</button>
        </div>
    );

}

export default ItemCount