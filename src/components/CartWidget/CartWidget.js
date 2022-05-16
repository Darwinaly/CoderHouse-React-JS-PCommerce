import logo from './addtocart.png';

function CartWidget () {
    return(
        <button type="button" className="btn btn-dark"><img src={logo} alt="add to cart"/> 1 </button>
    )
}

export default CartWidget;