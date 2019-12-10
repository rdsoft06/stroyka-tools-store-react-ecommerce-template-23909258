// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';


function FilterRadio(props) {
    const { items, name } = props;

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
                <span className="filter-list__input input-radio">
                    <span className="input-radio__body">
                        <input className="input-radio__input" type="radio" name={name} defaultChecked={item.checked} disabled={item.disabled} />
                        <span className="input-radio__circle" />
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

FilterRadio.propTypes = {
    items: PropTypes.array,
    name: PropTypes.string,
};

export default FilterRadio;
