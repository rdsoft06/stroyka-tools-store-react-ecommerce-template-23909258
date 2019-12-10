// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import Menu from './Menu';
import { ArrowRoundedDown7x5Svg } from '../../svg';


class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    handleOutsideClick = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState(() => ({
                open: false,
            }));
        }
    };

    handleButtonClick = () => {
        this.setState((state) => ({
            open: !state.open,
        }));
    };

    handleItemClick = (item) => {
        const { onClick } = this.props;

        this.setState(() => ({
            open: false,
        }));

        if (onClick) {
            onClick(item);
        }
    };

    render() {
        const { open } = this.state;
        const { title, withIcons, items } = this.props;

        const classes = classNames('topbar-dropdown', {
            'topbar-dropdown--opened': open,
        });

        return (
            <div className={classes} ref={this.setWrapperRef}>
                <button className="topbar-dropdown__btn" type="button" onClick={this.handleButtonClick}>
                    {title}
                    <ArrowRoundedDown7x5Svg />
                </button>

                <div className="topbar-dropdown__body">
                    <Menu
                        layout="topbar"
                        withIcons={withIcons}
                        items={items}
                        onClick={this.handleItemClick}
                    />
                </div>
            </div>
        );
    }
}

Dropdown.propTypes = {
    /** title */
    title: PropTypes.node.isRequired,
    /** array of menu items */
    items: PropTypes.array.isRequired,
    /** default: false */
    withIcons: PropTypes.bool,
    /** callback function that is called when the item is clicked */
    onClick: PropTypes.func,
};

Dropdown.defaultProps = {
    withIcons: false,
    onClick: undefined,
};

export default Dropdown;
