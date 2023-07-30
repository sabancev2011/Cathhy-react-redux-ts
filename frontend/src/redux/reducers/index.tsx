import { combineReducers } from "redux";
import items from './items'
import cart from './cart'

export const rootReducer = combineReducers({ items, cart })

export type RootState = ReturnType<typeof rootReducer>