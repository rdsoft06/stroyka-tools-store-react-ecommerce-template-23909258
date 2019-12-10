// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import { Check9x7Svg } from '../../svg';


function FilterCheckbox(props) {
    const { items } = props;

    const itemsList = items.map((item) => {
        let count;

        if (item.count) {
            count = <span className="filter-list__counter">{item.count}</span>;
        }

        return (
            <label
                key={item.id}
                className={classNames('filter-list__item', {
                    'filter-list__item--disabled': item.disabled,
                })}
            >
                <span className="filter-list__input input-check">
                    <span className="input-check__body">
                        <input className="input-check__input" type="checkbox" defaultChecked={item.checked} disabled={item.disabled} />
                        <span className="input-check__box" />
                        <Check9x7Svg className="input-check__icon" />
                    </span>
                </span>
                <span className="filter-list__title">{item.label}</span>
                {count}
            </label>
        );
    });

    return (
        <div className="filter-list">
            <div className="filter-list__list">
                {itemsList}
            </div>
        </div>
    );
}

FilterCheckbox.propTypes = {
    items: PropTypes.array,
};

export default FilterCheckbox;
