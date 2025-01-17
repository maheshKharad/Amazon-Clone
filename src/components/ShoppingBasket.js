import './ShoppingBasket.scss';

const ShoppingBasket = () => {
    return(
        <div className='shoppingBasket'>
        <h2>Your Shopping Basket</h2>
        <hr/>
        <ul className='list'>
        <li>
            <div className='imageHolder'>
            <img src="https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg" alt=""/>
            </div>
            <div className='itemDetails'>
            <div>sint cupidatat dolor mulla velit ipsum mollit minim ullamco ullamco voluptate elit.</div>
            <p><strong>$0:00</strong></p>
            <div>Rating</div>
            <button>Remove from cart</button>
            </div>
        </li>
        </ul>
        </div>
    )
}
export default ShoppingBasket;