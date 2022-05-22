import logo from './addtocart.png';

function CartWidget (props) {
    return(
        <button type="button" className="btn btn-dark"><img src={logo} alt="add to cart"/>{props.compras}</button>
    )
}

export default CartWidget;