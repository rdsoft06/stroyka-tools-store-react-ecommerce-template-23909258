// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import { Check12x9Svg } from '../../svg';


function FilterColor(props) {
    const { items } = props;

    const itemsList = items.map((item) => (
        <div key={item.id} className="filter-color__item">
            <span
                className={classNames('filter-color__check input-check-color', {
                    'input-check-color--white': item.white,
                    'input-check-color--light': item.light,
                })}
                style={{ color: item.color }}
            >
                <label className="input-check-color__body">
                    <input className="input-check-color__input" type="checkbox" defaultChecked={item.checked} disabled={item.disabled} />
                    <span className="input-check-color__box" />
                    <Check12x9Svg className="input-check-color__icon" />
                    <span className="input-check-color__stick" />
                </label>
            </span>
        </div>
    ));

    return (
        <div className="filter-color">
            <div className="filter-color__list">
                {itemsList}
            </div>
        </div>
    );
}

FilterColor.propTypes = {
    items: PropTypes.array,
};

export default FilterColor;
