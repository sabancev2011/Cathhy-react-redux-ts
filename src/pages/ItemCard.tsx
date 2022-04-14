import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../redux/reducers"
import { addCartItem } from "../redux/actions/cart"
import { CartItemType } from "../types/cart"

const ItemCard: React.FC = () => {
    const dispatch = useDispatch()
    const onAddCartItem = (cartItem: CartItemType) => dispatch(addCartItem(cartItem))
    const { id } = useParams()
    const item = useSelector(({ items }: RootState) => id && items.items.find((item) => item.id === +id))
    const cartQty = useSelector(({ cart }: RootState) => id && cart.cartItems.find((item) => item.id === +id)?.quantity)


    return (
        <>
            {item &&
                <div className="itemCard">
                    <div className="container">
                        <div className="itemCard__wrapper">
                            <div className="itemCard__img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="itemCardInfo">
                                <h1 className="itemCardInfo__title">{item.name}</h1>
                                <ul className="itemCardInfo__list">
                                    <li className="itemCardInfo__article">{`Product type: ${item.type}`}</li>
                                    <li className="itemCardInfo__article price">{`Price: $${item.price}`}</li>
                                </ul>
                                <div className="itemCardInfo__qty">
                                    <p className="itemCardInfo__qtyText">Qty in the cart</p>
                                    <div className="itemCardInfo__qtyCount">{cartQty ? cartQty : 0}</div>
                                    <button onClick={() => onAddCartItem({ id: item.id, name: item.name, img: item.img, price: +item.price, quantity: 1, totalItemPrice: +item.price })} className="itemCardInfo__addCartBtn">add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="itemCardDescr">
                            <h1 className="itemCardDescr__title">description</h1>
                            <p className="itemCardDescr__text">{item.description}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard