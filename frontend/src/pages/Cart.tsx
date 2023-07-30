import { useDispatch, useSelector } from 'react-redux'
import { CartItem } from '../components'
import { RootState } from '../redux/reducers'
import { clearCart, deleteCartItem } from '../redux/actions/cart'
import { CartItemType } from '../types/cart'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {

    const dispatch = useDispatch()
    const { cartItems, totalPrice } = useSelector(({ cart }: RootState) => cart)
    const onDeleteCartItem = (cartItem: CartItemType) => dispatch(deleteCartItem(cartItem))
    const onClearCart = () => dispatch(clearCart())

    return (
        <section className="cart">
            <div className="container">
                <h1 className="cart__title">Cart</h1>
                <div className="cartTable">
                    <ul className="cartTable__header">
                        <li className="cartTable__headerImg">Image</li>
                        <li className="cartTable__headerName">Product Name</li>
                        <li className="cartTable__headerQty">Quantity</li>
                        <li className="cartTable__headerPrice">Unit Price</li>
                        <li className="cartTable__headerTotal">Total</li>
                    </ul>
                    <div className="cartItem__wrapper">
                        {cartItems.map((item) => < CartItem key={item.id} id={item.id} img={item.img} name={item.name} price={item.price}
                            quantity={item.quantity} totalItemPrice={item.totalItemPrice} onDeleteCartItem={onDeleteCartItem} />)}
                    </div>
                </div>
                <span className="cart__total">{`Total: $${totalPrice}`}</span>
                <div className="cart__btnWrapper">
                    <Link to="/"><button className="cart__contShoppingBtn">continue shopping</button></Link>
                    <button onClick={onClearCart} className="cart__clearCartBtn">clear cart</button>
                </div>
            </div>
        </section>
    )
}

export default Cart