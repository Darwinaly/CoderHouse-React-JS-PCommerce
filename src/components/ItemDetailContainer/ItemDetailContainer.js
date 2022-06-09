import ItemDetail from "../ItemDetail/ItemDetail"
import {useState, useEffect} from 'react'
import { getProductsById } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect (() =>{
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    },[productId])

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer