import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Star } from '../assets';
import { Item, Loader } from '../components'
import { fetchItems } from '../redux/actions/items';
import { RootState } from '../redux/reducers';
import { addCartItem } from '../redux/actions/cart';
import { CartItemType } from '../types/cart';
import { TDispatch } from '../redux/actions';
import { IItem } from '../types/items';

const Items: React.FC = () => {
    const dispatch: TDispatch = useDispatch();
    const { items, filter, sort, isLoaded } = useSelector(({ items }: RootState) => items)
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
                    {isLoaded ?
                        items.map((item: IItem) => < Item key={item.id} item={item} onAddCartItem={onAddCartItem} />)
                        :
                        [...Array(30)].map((_, index) => <Loader key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Items