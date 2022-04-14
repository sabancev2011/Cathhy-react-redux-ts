import { BagIcon } from '../assets';
import { Link, useMatch } from 'react-router-dom';
import { RootState } from '../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { CartPopUp } from '../components';
import { deleteCartItem, setCartPopUp } from '../redux/actions/cart';
import { CartItemType } from '../types/cart';
import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { totalQty, totalPrice, cartItems, isCartPopUp } = useSelector(({ cart }: RootState) => cart)
  const onDeleteCartItem = (cartItem: CartItemType) => dispatch(deleteCartItem(cartItem))
  const onSetCartPopUp = (isShow: boolean) => dispatch(setCartPopUp(isShow))
  const cartLocation = useMatch("/cart")
  const [isCartLocation, setIsCartLocation] = useState(false)
  useEffect(() => {
    cartLocation ? setIsCartLocation(true) : setIsCartLocation(false)
  }, [cartLocation])

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/"><img src='../assets/logo.png' alt="logo" className="header__logo" /></Link>
          {cartItems.length ?
            <div className="header__cart">
              <Link to="/cart"><button className="header__cartBtn">
                <BagIcon className='header__bagIcon' />{`(${totalQty}) ITEMS`}</button></Link>
              {!isCartLocation &&
                <CartPopUp totalPrice={totalPrice} cartItems={cartItems} onDeleteCartItem={onDeleteCartItem} isCartPopUp={isCartPopUp} onSetCartPopUp={onSetCartPopUp} />
              }
            </div>
            :
            <div className="header__cart">
              <button className="header__cartBtn">
                <BagIcon className='header__bagIcon' />{`(${totalQty}) ITEMS`}</button>
            </div>
          }
        </div>
      </div>
    </header >
  )
}

export default Header