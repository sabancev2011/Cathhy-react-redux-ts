import axios from "axios";
import { Dispatch } from "redux";
import { Item, ItemsActions, ItemsActionTypes, FilterType, SortType } from "../../types/items";

export const setItems = (items: Item[]) => ({ type: ItemsActionTypes.SET_ITEMS, payload: items })
export const setFilter = (filter: FilterType) => ({ type: ItemsActionTypes.SET_FILTER, payload: filter })
export const setSort = (sort: SortType) => ({ type: ItemsActionTypes.SET_SORT, payload: sort })

export const fetchItems = (filter: FilterType, sort: SortType): any => {
    return async (dispatch: Dispatch<ItemsActions>) => {
        const { data } = await axios.get<Item[]>(`http://${process.env.REACT_APP_API_URL}/items?${filter !== 'all' ? `type=${filter}` : ''}${sort !== 'default' ? `&_sort=${sort}&_order=asc` : ''}`);
        dispatch({ type: ItemsActionTypes.SET_ITEMS, payload: data })
    }
}

