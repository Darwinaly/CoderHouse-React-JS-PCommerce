import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import logo from './addtocart.png';

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)
    
    const quantity = getQuantity()

    return(
        <Link to='/cart' className="btn btn-dark">
            <img src={logo} alt='add to cart'/>
            { quantity }
        </Link>
    )
}

export default CartWidget;
