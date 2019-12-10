// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import { Rating13x12Svg } from '../../svg';


function Rating(props) {
    const { value } = props;

    const stars = [1, 2, 3, 4, 5].map((rating) => {
        const rootClasses = classNames('rating__star', {
            'rating__star--active': value >= rating,
        });

        return <Rating13x12Svg key={rating} className={rootClasses} />;
    });

    return (
        <div className="rating">
            <div className="rating__body">
                {stars}
            </div>
        </div>
    );
}

Rating.propTypes = {
    /**
     * rating value
     */
    value: PropTypes.number,
};
Rating.defaultProps = {
    value: 0,
};

export default Rating;
