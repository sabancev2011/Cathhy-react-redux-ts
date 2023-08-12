import { ItemsState, ItemsActions, ItemsActionTypes } from "../../types/items"

const initialState: ItemsState = {
    items: [],
    isLoaded: false,
    filter: 'all',
    sort: 'default'
}

const items = (state = initialState, action: ItemsActions) => {
    switch (action.type) {
        case ItemsActionTypes.SET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case ItemsActionTypes.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            }
        case ItemsActionTypes.SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case ItemsActionTypes.SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default items