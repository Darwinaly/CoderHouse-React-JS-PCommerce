import { useContext, useState} from "react"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import Form from '../Form/Form'
import {Link} from "react-router-dom"
import './Cart.css'


const Cart = () => {

    const [loading, setLoading] = useState(false)
    const {cart, clearCart, getTotal, getQuantity} = useContext(CartContext)
    const[buyer, setBuyer] = useState()
    const[orderId, setOrderId] = useState('')
    
    const newBuyer = (buyer) =>{
        setBuyer(buyer)
    };

    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            buyer,
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(db)
        const outOfStock = []
        const collectionRef = collection(db, 'products')
   
        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setOrderId(id)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

 

    if(loading) {
        return <h1>Generando orden...</h1>
    }

    if (orderId !== '') {
        return(
            <div className="card mensajeCartVacio">
            <h1>La orden {orderId} fue creada con exito</h1>
            <Link className="navTitle" to="/">Ir a home</Link>
            </div>
        )
    }

    if (getQuantity()===0) {
        return(<div className="card mensajeCartVacio"><h1>No hay productos en el carrito</h1><Link className="navTitle" to="/">Ir a home</Link></div>)
    }
    
    return (
        <div className="cart">
            <div  className="tarjetaCartItem">
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
            </div>
            <div className="card tarjetaTotal">
                <Form className="cardForm" newBuyer={newBuyer}/> 
                <h3 className="total">Precio total: ${getTotal()}</h3>
                <button onClick={() => clearCart()} className="buttonClearCart">Limpiar carrito</button>
                {buyer === undefined
                ? <p className="buyerAlert">Debe cargar la informacion de contacto para continuar con la compra</p>
                : <button className="buttonGenerarOrden" onClick={createOrder}>Generar Orden</button>}
            </div>
        </div>
    )
}

export default Cart




