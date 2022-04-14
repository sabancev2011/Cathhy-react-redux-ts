import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Star } from '../assets';
import { Item } from '../components'
import { fetchItems } from '../redux/actions/items';
import { RootState } from '../redux/reducers';
import { addCartItem } from '../redux/actions/cart';
import { CartItemType } from '../types/cart';


const Items: React.FC = () => {
    const dispatch = useDispatch();
    const { items, filter, sort } = useSelector(({ items }: RootState) => items)
    const onAddCartItem = (cartItem: CartItemType) => dispatch(addCartItem(cartItem))


    useEffect(() => {
        dispatch(fetchItems(filter, sort))
    }, [filter, sort, dispatch])

    return (
        <section className="items">
            <div className="container">
                <h1 className="catTitle">
                    <Star className='catTitle__icon' />{filter}</h1>
                <div className="items__wrapper">
                    {items.map((item) => < Item key={item.id} id={item.id} img={item.img}
                        name={item.name} price={item.price} type={item.type} onAddCartItem={onAddCartItem} />)}
                </div>
            </div>
        </section>
    )
}

export default Items