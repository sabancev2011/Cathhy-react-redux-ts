import { CartItemType } from '../types/cart';
import { CartPopUpItem } from '../components';
import { Link } from 'react-router-dom'


interface CartPopUpProps {
    cartItems: CartItemType[]
    totalPrice: number
    isCartPopUp: boolean
    onDeleteCartItem: (cartItem: CartItemType) => void
    onSetCartPopUp: (isShow: boolean) => void
}


const CartPopUp: React.FC<CartPopUpProps> = ({ cartItems, totalPrice, isCartPopUp, onDeleteCartItem, onSetCartPopUp }) => {
    return (
        <div onMouseEnter={() => onSetCartPopUp(true)} onMouseLeave={() => onSetCartPopUp(false)} className={isCartPopUp ? `cartPopUp` : `cartPopUp none`}>
            <ul className="cartPopUp__list">
                {cartItems.map((item) => <CartPopUpItem key={item.id} img={item.img} id={item.id} name={item.name}
                    price={item.price} quantity={item.quantity} onDeleteCartItem={onDeleteCartItem} />)}
            </ul>
            <p className="cartPopUp__total"><strong>Total: </strong>{`$${totalPrice}`}</p>
            <Link to='/cart'><button className="cartPopUp__viewCartBtn">View Cart</button></Link>
        </div>
    )
}

export default CartPopUp