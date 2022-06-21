import { useContext, useState} from "react"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import Form from '../Form/Form'
import {Link} from "react-router-dom"
import './Cart.css'


const Cart = () => {

    const {cart, clearCart, getTotal, getQuantity} = useContext(CartContext)

    const[buyer, setBuyer] = useState()
    

    const newBuyer = (buyer) =>{
        setBuyer(buyer)
    };

    
    const createOrder = () => {
        if(buyer === undefined){
            console.log("Falta buyer")
        }else{
            const objOrder = {
                buyer,
                items: cart,
                total: getTotal()
            }
            console.log(objOrder)

            // const collectionRef = collection(db, 'orders')
            // addDoc(collectionRef, objOrder).then(({id} )=>{
            //     console.log("Orden creada con exito")
            // })

            /////////////////////////////////////////////////////////
            
            const ids = cart.map(prod => prod.id)

            const batch = writeBatch(db)

            const outoOfStock = []

            const collectionRef = collection(db, 'orders')

            getDocs(query(collectionRef, where(documentId(), 'in', ids)))
                .then(response => {
                    response.docs.forEach(doc=>{
                        const dataDoc = doc.data()
                        const prodQuantity = cart.find(prod=> prod.id === doc.id)?.quiantity

                        if(dataDoc.stock >= prodQuantity) {
                            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                        } else {
                            outoOfStock.push({id: doc.id, ...dataDoc})
                        }
                    })
                }).then(() => {
                    if(outoOfStock.length === 0) {
                        const collectionRef = collection(db, 'orders')
                        return addDoc(collectionRef, objOrder)
                    } else {
                        return Promise.reject({ type: 'out_of_stock', products: outoOfStock})
                    }
                }).then(({id}) => {
                    batch.commit()
                }).catch(error => {
                    console.log(error)
                })






        }  
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
                {/* {buyer === undefined
                ? <p>Debe completar la informacion para generar orden</p>
                : <button className="buttonGenerarOrden" onClick={createOrder}>Generar Orden</button>} */}
                <button className="buttonGenerarOrden" onClick={createOrder}>Generar Orden</button>
            </div>
            
        </div>
    )
}

export default Cart

// cart.find(prod => prod.id === id)


