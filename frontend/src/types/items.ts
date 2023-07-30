export enum ItemsActionTypes {
    SET_ITEMS = "SET_ITEMS",
    SET_FILTER = "SET_FILTER",
    SET_SORT = "SET_SORT"
}

export type FilterType = 'all' | 'mobile' | 'notebook' | 'display'
export type SortType = 'default' | 'name' | 'price'

export interface Item {
    id: number
    type: string
    img: string
    name: string
    description: string
    price: number
}

export interface ItemsState {
    items: Item[]
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
    payload: Item[]
}

export type ItemsActions = SetItemsAction | SetSortAction | SetFilterAction 