// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';

// application
import AppLink from '../shared/AppLink';
import { ArrowRoundedRight6x9Svg } from '../../svg';


function Menu(props) {
    const {
        layout,
        withIcons,
        items,
        onClick,
    } = props;

    const renderLink = (item, content) => {
        let link;
        
        if (item.url) {
            link = (
                <AppLink
                    {...item.props}
                    to={item.url}
                    onClick={() => onClick(item)}
                >
                    {content}
                </AppLink>
            );
        } else {
            link = <button type="button" onClick={() => onClick(item)}>{content}</button>;
        }

        return link;
    };
    console.log(items)
    const itemsList = items.map((item, index) => {
        
        let arrow;
        let submenu;
        let icon;

        if (item.submenu) {
            arrow = <ArrowRoundedRight6x9Svg className="menu__arrow" />;
        }

        if (item.submenu) {
            submenu = (
                <div className="menu__submenu">
                    <Menu items={item.submenu} />
                </div>
            );
        }

        if (withIcons && item.icon) {
            icon = (
                <div className="menu__icon">
                    <img src={item.icon} srcSet={item.icon_srcset} alt="" />
                </div>
            );
        }

        if(!item.title){
                 return (
            <li key={index}>
                {renderLink(item, (
                    <React.Fragment>
                        {icon}
                        {item}
                        {arrow}
                    </React.Fragment>
                ))}
                {submenu}
            </li>
        );
        }
        return (
            <li key={index}>
                {renderLink(item, (
                    <React.Fragment>
                        {icon}
                        {item.title}
                        {arrow}
                    </React.Fragment>
                ))}
                {submenu}
            </li>
        );
    });

    const classes = classNames(`menu menu--layout--${layout}`, {
        'menu--with-icons': withIcons,
    });

    return (
        <ul className={classes}>
            {itemsList}
        </ul>
    );
}

Menu.propTypes = {
    /** one of ['classic', 'topbar'] (default: 'classic') */
    layout: PropTypes.oneOf(['classic', 'topbar']),
    /** default: false */
    withIcons: PropTypes.bool,
    /** array of menu items */
    items: PropTypes.array,
    /** callback function that is called when the item is clicked */
    onClick: PropTypes.func,
};

Menu.defaultProps = {
    layout: 'classic',
    withIcons: false,
    items: [],
    onClick: () => {},
};

export default Menu;
