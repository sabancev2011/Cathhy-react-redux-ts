import { Link } from "react-router-dom"
import { CartItemType } from "../types/cart"


interface ItemProps {
    id: number
    img: string
    name: string
    price: number
    type: string
    onAddCartItem: (cartItem: CartItemType) => void
}

const Item: React.FC<ItemProps> = ({ id, img, name, price, type, onAddCartItem }) => {
    return (
        <div className="item">
            <div className="item__imgWrapper">
                <Link to={`/itemCard/${id}`}><img src={img} alt="item" className="item__img" /></Link>
                <button onClick={() => {
                    onAddCartItem({
                        id: id,
                        name: name,
                        img: img,
                        price: +price,
                        quantity: 1,
                        totalItemPrice: +price
                    });
                }} className="item__addCartBtn">add to cart</button>
            </div>
            <div className="item__inner">
                <p className="item__type">{type}</p>
                <p className="item__name">{name}</p>
                <span className="item__price">${price}</span>
            </div>
        </div>
    )
}

export default Item




