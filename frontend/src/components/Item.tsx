import { Link } from "react-router-dom"
import { CartItemType } from "../types/cart"
import { IItem } from "../types/items"

interface ItemProps {
    item: IItem
    onAddCartItem: (cartItem: CartItemType) => void
}

const Item: React.FC<ItemProps> = ({ item, onAddCartItem }) => {
    return (
        <div className="item">
            <div className="item__imgWrapper">
                <Link to={`/itemCard/${item.id}`}><img src={item.img} alt="item" className="item__img" /></Link>
                <button onClick={() => {
                    onAddCartItem({
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        price: Number(item.price),
                        quantity: 1,
                        totalItemPrice: Number(item.price)
                    });
                }} className="item__addCartBtn">add to cart</button>
            </div>
            <div className="item__inner">
                <p className="item__type">{item.type}</p>
                <p className="item__name">{item.name}</p>
                <span className="item__price">${item.price}</span>
            </div>
        </div>
    )
}

export default Item




