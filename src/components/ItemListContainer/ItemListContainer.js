import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {getProducts} from '../../asyncmock'
import { useParams } from 'react-router-dom'
import {getProductsByCategory, getProductsByMarca} from '../../asyncmock'


function ItemListContainer (){

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
    const {marcaId} = useParams()

    useEffect (() => {
        if (!categoryId && !marcaId) {
            getProducts(categoryId).then(response => {
                setProducts(response)
            })
        }else if (!marcaId){
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        }else {
            getProductsByMarca(marcaId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId, marcaId])


    return (
        <ItemList products={products}/>
    );
}

export default ItemListContainer