export enum ItemsActionTypes {
    SET_ITEMS = "SET_ITEMS",
    SET_FILTER = "SET_FILTER",
    SET_SORT = "SET_SORT",
    SET_LOADED = "SET_LOADED"
}

export type FilterType = 'all' | 'mobile' | 'notebook' | 'display'
export type SortType = 'default' | 'name' | 'price'

export interface IItem {
    id: number
    type: string
    img: string
    name: string
    description: string
    price: number
}

export interface ItemsState {
    items: IItem[]
    isLoaded: boolean
    filter: FilterType
    sort: SortType
}

export interface SetFilterAction {
    type: ItemsActionTypes.SET_FILTER
    payload: FilterType
}

export interface SetSortAction {
    type: ItemsActionTypes.SET_SORT
    payload: SortType
}

export interface SetItemsAction {
    type: ItemsActionTypes.SET_ITEMS
    payload: IItem[]
}

export interface SetLoadedAction {
    type: ItemsActionTypes.SET_LOADED
    payload: boolean
}

export type ItemsActions = SetItemsAction | SetSortAction | SetFilterAction | SetLoadedAction 