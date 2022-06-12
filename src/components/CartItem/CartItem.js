import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='cardCarrito card'>
            <header className="cardTitulo">
                <h2 className="cardTituloNombre">
                    {name}
                </h2>
            </header>
            <section className='cardInfo'>
                <p className="cardInfoItems"> Items agregados: {quantity} </p>
                <p className="cardInfoPrecio"> Precio unitario: ${price} </p>
                <p className="cardInfoSubtotal"> Subtotal: ${price * quantity} </p>
            </section> 
            <div className='button'><button className='buttonclose close' onClick={() => handleRemove(id)}>X</button></div>
        </article>
    )
}

export default CartItem