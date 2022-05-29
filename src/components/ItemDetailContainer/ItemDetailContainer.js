import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from 'react'
import { getProductsById } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect (() =>{
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    },[])

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer