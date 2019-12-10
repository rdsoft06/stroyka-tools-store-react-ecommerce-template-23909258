// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import Collapse from '../shared/Collapse';
import FilterCategories from '../filters/FilterCategories';
import FilterCheckbox from '../filters/FilterCheckbox';
import FilterColor from '../filters/FilterColor';
import FilterPrice from '../filters/FilterPrice';
import FilterRadio from '../filters/FilterRadio';
import { ArrowRoundedDown12x7Svg } from '../../svg';


function WidgetFilters(props) {
    const { title, filters, offcanvas } = props;

    const filtersList = filters.map((filter) => {
        let filterView;

        if (filter.type === 'categories') {
            filterView = <FilterCategories categories={filter.options.items} />;
        } else if (filter.type === 'checkbox') {
            filterView = <FilterCheckbox items={filter.options.items} />;
        } else if (['checkbox', 'radio'].includes(filter.type)) {
            filterView = (
                <FilterRadio
                    items={filter.options.items}
                    name={filter.options.name}
                />
            );
        } else if (filter.type === 'color') {
            filterView = <FilterColor items={filter.options.items} />;
        } else if (filter.type === 'price') {
            filterView = (
                <FilterPrice
                    from={filter.options.from}
                    to={filter.options.to}
                    min={filter.options.min}
                    max={filter.options.max}
                    step={1}
                />
            );
        }

        return (
            <div key={filter.id} className="widget-filters__item">
                <Collapse
                    toggleClass="filter--opened"
                    render={({ toggle, setItemRef, setContentRef }) => (
                        <div className="filter filter--opened" ref={setItemRef}>
                            <button type="button" className="filter__title" onClick={toggle}>
                                {filter.name}
                                <ArrowRoundedDown12x7Svg className="filter__arrow" />
                            </button>
                            <div className="filter__body" ref={setContentRef}>
                                <div className="filter__container">
                                    {filterView}
                                </div>
                            </div>
                        </div>
                    )}
                />
            </div>
        );
    });

    const classes = classNames('widget-filters widget', {
        'widget-filters--offcanvas--always': offcanvas === 'always',
        'widget-filters--offcanvas--mobile': offcanvas === 'mobile',
    });

    return (
        <div className={classes}>
            <h4 className="widget-filters__title widget__title">{title}</h4>

            <div className="widget-filters__list">
                {filtersList}
            </div>

            <div className="widget-filters__actions d-flex">
                <button type="button" className="btn btn-primary btn-sm">Filter</button>
                <button type="button" className="btn btn-secondary btn-sm ml-2">Reset</button>
            </div>
        </div>
    );
}

WidgetFilters.propTypes = {
    /**
     * widget title
     */
    title: PropTypes.node,
    /**
     * array of filters
     */
    filters: PropTypes.array,
    /**
     * indicates when sidebar bar should be off canvas
     */
    offcanvas: PropTypes.oneOf(['always', 'mobile']),
};

WidgetFilters.defaultProps = {
    filters: [],
    offcanvas: 'mobile',
};

export default WidgetFilters;
