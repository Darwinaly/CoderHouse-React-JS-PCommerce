import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const {cart, clearCart, getTotal, getQuantity} = useContext(CartContext)

    if (getQuantity()===0) {
        return(<div className="card mensajeCartVacio"><h1>No hay productos en el carrito</h1><Link className="navTitle" to="/">Ir a home</Link></div>)
    }

    return (
        <div className="cart">
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className="card tarjetaTotal">
            <h3 className="total">Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="buttonClearCart btn btn-warning">Limpiar carrito</button>
            <button className="buttonGenerarOrden btn btn-success">Generar Orden</button>
            </div>
        </div>
    )
}

export default Cart

// cart.find(prod => prod.id === id)


