import ItemCount from "../ItemCount/ItemCount";


function ItemListContainer (props){
    
    const onAdd = (count) => {
        console.log('Add to cart');
    };

    return (
        <>
        <h4>{props.mensaje}</h4>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer