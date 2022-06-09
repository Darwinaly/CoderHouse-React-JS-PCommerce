import { useState, createContext} from "react";

const CartContext = createContext()

export const CartContexProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart ([...cart, productToAdd])
    }
    
    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.count
        })
        
        return accu
    }


    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    return (
        <CartContext.Provider value={{cart, addItem, getQuantity, getProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext