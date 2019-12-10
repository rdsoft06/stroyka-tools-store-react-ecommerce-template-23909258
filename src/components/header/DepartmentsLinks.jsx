// react
import React, { useState, useEffect } from 'react';

// third-party
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// application

import Menu from './Menu';
import { ArrowRoundedRight6x9Svg } from '../../svg';

import { categoryGetItem } from '../../store/category';


function DepartmentsLinks(props) {
    const {
        buttonLabel,
        className
    } = props;

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category)

    useEffect(() => {
        getCategories()
    }, [])


    async function getCategories() {
        await dispatch(categoryGetItem())
    }

  
    const linksList = categories.map((category, index) => {

        let arrow = null;
        let submenu = null;
        let itemClass = '';

        if (category.subcategory && category.subcategory.length != 0) {
            arrow = <ArrowRoundedRight6x9Svg className="departments__link-arrow" />;
        }

        if (category.subcategory && category.subcategory.length != 0) {
            itemClass = 'departments__item--menu';
            submenu = (
                <div className="departments__menu">
                    <Menu items={category.subcategory} />
                </div>
            );
        }


        return (
            <li key={index} className={`departments__item ${itemClass}`}>
                <Link to={category.url}>
                    {category.name}
                    {arrow}
                </Link>
                 {/* {submenu}  */}
            </li>
        );
    });

    return (
        <ul className="departments__links">
            {linksList}
        </ul>
    );
}





export default DepartmentsLinks
