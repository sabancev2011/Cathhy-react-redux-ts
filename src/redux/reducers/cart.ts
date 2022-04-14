import { CartActions, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0,
    totalQty: 0,
    isCartPopUp: false
}

const cart = (state = initialState, action: CartActions) => {
    switch (action.type) {
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id === action.payload.id).length ?
                    [...state.cartItems.map((item) => item.id === action.payload.id ? {
                        ...item,
                        quantity: item.quantity + action.payload.quantity,
                        totalItemPrice: item.totalItemPrice + action.payload.price
                    } : item)] : [...state.cartItems, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
                totalQty: state.totalQty + 1
            }
        case CartActionTypes.DELITE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id === action.payload.id)[0].quantity > 1 ? state.cartItems.map((item) => item.id === action.payload.id ? {
                    ...item,
                    quantity: item.quantity - action.payload.quantity,
                    totalItemPrice: item.totalItemPrice - action.payload.price
                } : item) : state.cartItems.filter((item) => item.id !== action.payload.id),
                totalPrice: state.totalPrice - action.payload.price,
                totalQty: state.totalQty - 1
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                totalPrice: 0,
                totalQty: 0
            }
        case CartActionTypes.SET_CART_POP_UP:
            return {
                ...state,
                isCartPopUp: action.payload
            }
        default:
            return state
    }
}

export default cart

