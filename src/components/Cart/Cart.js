import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <div>
            {cart.map (prod => <div key={prod.id}>Nombre: {prod.name} | Precio: USD{prod.price} | Cantidad: {prod.count} | Total: {prod.price * prod.count}</div>)}
        </div>
    )
}

export default Cart