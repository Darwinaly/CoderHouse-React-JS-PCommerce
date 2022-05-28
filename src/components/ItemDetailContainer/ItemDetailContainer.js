import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from 'react'
import { getProductsById } from "../../asyncmock"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    useEffect (() =>{
        getProductsById('4').then(response => {
            setProduct(response)
        })
    },[])

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer