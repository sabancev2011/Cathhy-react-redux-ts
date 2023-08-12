import axios from "axios";
import { Dispatch } from "redux";
import { IItem, ItemsActions, ItemsActionTypes, FilterType, SortType } from "../../types/items";

export const setItems = (items: IItem[]) => ({ type: ItemsActionTypes.SET_ITEMS, payload: items })
export const setFilter = (filter: FilterType) => ({ type: ItemsActionTypes.SET_FILTER, payload: filter })
export const setSort = (sort: SortType) => ({ type: ItemsActionTypes.SET_SORT, payload: sort })

export const fetchItems = (filter: FilterType, sort: SortType) => {
    return async (dispatch: Dispatch<ItemsActions>) => {
        const { data } = await axios.get<IItem[]>(`https://${process.env.REACT_APP_API_URL}/items?${filter !== 'all' ? `type=${filter}&` : ''}_sort=${sort}`);
        dispatch({ type: ItemsActionTypes.SET_ITEMS, payload: data })
        dispatch({ type: ItemsActionTypes.SET_LOADED, payload: true })
    }
}