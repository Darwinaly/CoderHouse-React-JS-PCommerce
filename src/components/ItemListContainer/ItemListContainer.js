import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {getProducts} from '../../asyncmock'


function ItemListContainer (){

    const [products, setProducts] = useState([])

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])



    return (
        <ItemList products={products}/>
    );
}

export default ItemListContainer