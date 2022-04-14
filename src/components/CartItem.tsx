import { CloseIcon } from '../assets';
import { CartItemType } from '../types/cart';

interface CartItemProps {
    id: number
    img: string
    name: string
    price: number
    quantity: number
    totalItemPrice: number
    onDeleteCartItem: (cartItem: CartItemType) => void
}

const CartItem: React.FC<CartItemProps> = ({ id, img, name, price, quantity, totalItemPrice, onDeleteCartItem }) => {
    return (
        <ul className="cartItem">
            <li className="cartItem__img"><div className="cartItem__imgInner"><img src={img} alt={name} /></div></li>
            <li className="cartItem__name">{name}</li>
            <li className="cartItem__qty"><div className="cartItem__qtyInner">{quantity}</div>
                <button onClick={() => onDeleteCartItem({ id: id, img: img, name: name, price: price, quantity: 1, totalItemPrice: price })} className="cartItem__qtyDelBtn"><CloseIcon /></button></li>
            <li className="cartItem__price">{`$${price}`}</li>
            <li className="cartItem__total">{`$${totalItemPrice}`}</li>
        </ul>
    )
}

export default CartItem