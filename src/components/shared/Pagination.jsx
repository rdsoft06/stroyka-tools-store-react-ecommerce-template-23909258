// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import { ArrowRoundedLeft8x13Svg, ArrowRoundedRight8x13Svg } from '../../svg';


class Pagination extends Component {
    setPage = (value) => {
        const { total, current, onPageChange } = this.props;

        if (value < 1 || value > total || value === current) {
            return;
        }

        if (onPageChange) {
            onPageChange(value);
        }
    };

    getPages() {
        const { siblings, current, total } = this.props;
        const pages = [];
        const min = Math.max(1, current - siblings - Math.max(0, siblings - total + current));
        const max = Math.min(total, min + siblings * 2);

        for (let i = min; i <= max; i += 1) {
            pages.push(i);
        }

        return pages;
    }

    render() {
        const { current, total } = this.props;
        const firstLinkClasses = classNames('page-item', {
            disabled: current <= 1,
        });
        const lastLinkClasses = classNames('page-item', {
            disabled: current >= total,
        });

        const pages = this.getPages().map((page, index) => {
            const classes = classNames('page-item', {
                active: page === current,
            });

            return (
                <li key={index} className={classes}>
                    <button type="button" className="page-link" onClick={() => this.setPage(page)}>
                        {page}
                        {page === current && <span className="sr-only">(current)</span>}
                    </button>
                </li>
            );
        });

        return (
            <ul className="pagination justify-content-center">
                <li className={firstLinkClasses}>
                    <button
                        type="button"
                        className="page-link page-link--with-arrow"
                        aria-label="Previous"
                        onClick={() => this.setPage(current - 1)}
                    >
                        <ArrowRoundedLeft8x13Svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" />
                    </button>
                </li>
                {pages}
                <li className={lastLinkClasses}>
                    <button
                        type="button"
                        className="page-link page-link--with-arrow"
                        aria-label="Next"
                        onClick={() => this.setPage(current + 1)}
                    >
                        <ArrowRoundedRight8x13Svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" />
                    </button>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    /**
     * the number of sibling links
     */
    siblings: PropTypes.number,
    /**
     * current page number
     */
    current: PropTypes.number,
    /**
     * total pages
     */
    total: PropTypes.number,
    /**
     * total pages
     */
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    siblings: 1,
    current: 1,
    total: 1,
};

export default Pagination;
