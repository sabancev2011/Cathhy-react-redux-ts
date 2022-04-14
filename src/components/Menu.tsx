import { MenuIcon, ArrowIcon, DisplayIcon, MobileIcon, NotebookIcon, AllIcon } from '../assets';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from '../redux/actions/items';
import { FilterType, SortType } from '../types/items';
import { RootState } from '../redux/reducers';
import useOnclickOutside from "react-cool-onclickoutside";
import { useMatch } from 'react-router-dom';

const Menu: React.FC = () => {

    const pathMatch = useMatch('/')
    const [isMenu, setIsMenu] = useState(true)
    const [filterPopUp, setFilterPopUp] = useState(false)
    const [sortPopUp, setSortPopUp] = useState(false)
    const dispatch = useDispatch()
    const onSetFilter = (filter: FilterType) => dispatch(setFilter(filter))
    const onSetSort = (sort: SortType) => dispatch(setSort(sort))
    const { sort } = useSelector(({ items }: RootState) => items)

    const filterRef = useOnclickOutside(() => {
        setFilterPopUp(false);
    })

    const sortRef = useOnclickOutside(() => {
        setSortPopUp(false);
    })

    useEffect(() => {
        pathMatch ? setIsMenu(true) : setIsMenu(false)  
    }, [pathMatch])

    return (
        <div className="menu">
            <div className="container">
                { isMenu ?
                    <div className="menu__wrapper">
                    <button ref={filterRef} onClick={() => setFilterPopUp(!filterPopUp)} className="menu__catBtn">
                        <MenuIcon className='menu__menuIcon' />
                        categories
                    </button>
                    <ul ref={filterRef} className={filterPopUp ? "filterPopUp" : "filterPopUp none"}>
                        <li onClick={() => { dispatch(onSetFilter('all')); setFilterPopUp(false) }} className="filterPopUpItem"><AllIcon className='filterPopUpItem__mobileIcon' />all</li>
                        <li onClick={() => { dispatch(onSetFilter('mobile')); setFilterPopUp(false) }} className="filterPopUpItem"><MobileIcon className='filterPopUpItem__mobileIcon' />mobile</li>
                        <li onClick={() => { dispatch(onSetFilter('notebook')); setFilterPopUp(false) }} className="filterPopUpItem"><NotebookIcon className='filterPopUpItem__notebookIcon' />notebook</li>
                        <li onClick={() => { dispatch(onSetFilter('display')); setFilterPopUp(false) }} className="filterPopUpItem"><DisplayIcon className='filterPopUpItem__displayIcon' />display</li>
                    </ul>
                    <div ref={sortRef} className="menu__sort">
                        <p className='menu__sortTitle'>sort by:</p>
                        <button onClick={() => setSortPopUp(!sortPopUp)} className={sortPopUp ? "menu__sortBtn" : "menu__sortBtn close"}>
                            <span>{sort}</span>
                            <ArrowIcon className='menu__arrowIcon' />
                        </button>
                        <ul className={sortPopUp ? "sortPopUp" : "sortPopUp none"}>
                            <li onClick={() => { dispatch(onSetSort('default')); setSortPopUp(false) }} className="sortPopUp__item">Default</li>
                            <li onClick={() => { dispatch(onSetSort('name')); setSortPopUp(false) }} className="sortPopUp__item">Name</li>
                            <li onClick={() => { dispatch(onSetSort('price')); setSortPopUp(false) }} className="sortPopUp__item">Price</li>
                        </ul>
                    </div>
                </div>
                :
                <div className="menu__wrapper">
                    <button className="menu__catBtn">
                        <MenuIcon className='menu__menuIcon' />
                        categories
                    </button>
                    <div className="menu__sort">
                        <p className='menu__sortTitle'>sort by:</p>
                        <button className="menu__sortBtn">
                            <span>default</span>
                            <ArrowIcon className='menu__arrowIcon' />
                        </button>
                    </div>
                </div> 
                }
            </div>
        </div>
    )
}

export default Menu