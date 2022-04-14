import { CloseIcon } from '../assets';
import { CartItemType } from '../types/cart'

interface CartPopUpItemProps {
    id: number
    name: string
    img: string
    price: number
    quantity: number
    onDeleteCartItem: (cartItem: CartItemType) => void
}

const CartPopUpItem: React.FC<CartPopUpItemProps> = ({ id, name, img, price, quantity, onDeleteCartItem }) => {
    return (
        <li className="cartPopUpItem">
            <img src={img} alt={name} className="cartPopUpItem__img" />
            <div className="cartPopUpItem__wrapper">
                <span className="cartPopUpItem__name">{name}</span>
                <div className="cartPopUp__inner">
                    <span className="cartPopUpItem__count">{`${quantity} x`}</span>
                    <span className="cartPopUpItem__price">{` $${price}`}</span>
                </div>
            </div>
            <button onClick={() => onDeleteCartItem({ id: id, name: name, img: img, quantity: 1, totalItemPrice: price, price: price })} className="cartPopUp__closeBtn">
                <CloseIcon className='cartPopUpItem__closeIcon' /></button>
        </li>

    )
}

export default CartPopUpItem