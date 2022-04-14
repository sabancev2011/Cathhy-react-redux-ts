import { CartActionTypes, CartItemType } from "../../types/cart";

export const addCartItem = (cartItem: CartItemType) => ({ type: CartActionTypes.ADD_CART_ITEM, payload: cartItem })
export const deleteCartItem = (cartItem: CartItemType) => ({ type: CartActionTypes.DELITE_CART_ITEM, payload: cartItem })
export const clearCart = () => ({ type: CartActionTypes.CLEAR_CART })
export const setCartPopUp = (isShow: boolean) => ({ type: CartActionTypes.SET_CART_POP_UP, payload: isShow})