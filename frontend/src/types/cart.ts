export interface CartItemType {
    id: number
    name: string
    img: string
    price: number
    quantity: number
    totalItemPrice: number
}

export enum CartActionTypes {
    ADD_CART_ITEM = 'ADD_CART_ITEM',
    DELITE_CART_ITEM = 'DELITE_CART_ITEM',
    CLEAR_CART = 'CLEAR_CART',
    SET_CART_POP_UP = 'SET_CART_POP_UP'
}

export interface CartState {
    cartItems: CartItemType[]
    totalPrice: number
    totalQty: number
    isCartPopUp: boolean
}

export interface AddCartItem {
    type: CartActionTypes.ADD_CART_ITEM
    payload: CartItemType
}

export interface DeleteCartItem {
    type: CartActionTypes.DELITE_CART_ITEM
    payload: CartItemType
}

export interface ClearCart {
    type: CartActionTypes.CLEAR_CART
}

export interface SetCartPopUp {
    type: CartActionTypes.SET_CART_POP_UP
    payload: boolean
}

export type CartActions = AddCartItem | DeleteCartItem | ClearCart | SetCartPopUp  