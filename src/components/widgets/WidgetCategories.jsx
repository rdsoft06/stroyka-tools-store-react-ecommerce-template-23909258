// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// application
import Collapse from '../shared/Collapse';
import { ArrowRoundedRight6x9Svg } from '../../svg';


function WidgetCategories(props) {
    const { categories, location } = props;
    const categoriesList = categories.map((category) => {
        const renderCategory = ({ toggle, setItemRef, setContentRef }) => {
            let expander;
            let children;

            if (category.children && category.children.length > 0) {
                expander = <button className="widget-categories__expander" type="button" aria-label="Expand" onClick={toggle} />;

                children = (
                    <div className="widget-categories__subs" ref={setContentRef}>
                        <ul>
                            {category.children.map((sub) => (
                                <li key={sub.id}><Link to={sub.url}>{sub.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                );
            }

            return (
                <li className="widget-categories__item" ref={setItemRef}>
                    <div className="widget-categories__row">
                        <Link to={category.url}>
                            <ArrowRoundedRight6x9Svg className="widget-categories__arrow" />
                            {category.name}
                        </Link>
                        {expander}
                    </div>
                    {children}
                </li>
            );
        };

        return <Collapse key={category.id} toggleClass="widget-categories__item--open" render={renderCategory} />;
    });

    return (
        <div className={`widget-categories widget-categories--location--${location} widget`}>
            <h4 className="widget__title">Categories</h4>
            <ul className="widget-categories__list">
                {categoriesList}
            </ul>
        </div>
    );
}

WidgetCategories.propTypes = {
    /**
     * category array
     */
    categories: PropTypes.array,
    /**
     * widget location (default: 'blog')
     * one of ['blog', 'shop']
     */
    location: PropTypes.oneOf(['blog', 'shop']),
};

WidgetCategories.defaultProps = {
    categories: [],
    location: 'blog',
};

export default WidgetCategories;
