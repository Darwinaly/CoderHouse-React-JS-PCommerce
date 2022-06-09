import { useContext } from 'react';
import CartContext from '../../context/CartContext'
import logo from './addtocart.png';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)
    
    const quantity = getQuantity()

    return(
        <button type="button" className="btn btn-dark"><img src={logo} alt="add to cart"/> {quantity} </button>
    )
}

export default CartWidget;