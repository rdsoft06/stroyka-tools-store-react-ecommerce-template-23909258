// react
import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

// application
import Dropdown from './Dropdown';
import DropdownCurrency from './DropdownCurrency';
import DropdownLanguage from './DropdownLanguage';


function Topbar() {
    const links = [
        { title: <FormattedMessage id="topbar.aboutUs" defaultMessage="About Us" />, url: '/site/about-us' },
        { title: <FormattedMessage id="topbar.contacts" defaultMessage="Contacts" />, url: '/site/contact-us' },
        { title: <FormattedMessage id="topbar.storeLocation" defaultMessage="Store Location" />, url: '' },
        { title: <FormattedMessage id="topbar.trackOrder" defaultMessage="Track Order" />, url: '/shop/track-order' },
        { title: <FormattedMessage id="topbar.blog" defaultMessage="Blog" />, url: '/blog/category-classic' },
    ];

    const accountLinks = [
        { title: 'Dashboard', url: '/account/dashboard' },
        { title: 'Edit Profile', url: '/account/profile' },
        { title: 'Order History', url: '/account/orders' },
        { title: 'Addresses', url: '/account/addresses' },
        { title: 'Password', url: '/account/password' },
        { title: 'Logout', url: '/account/login' },
    ];

    const linksList = links.map((item, index) => (
        <div key={index} className="topbar__item topbar__item--link">
            <Link className="topbar-link" to={item.url}>{item.title}</Link>
        </div>
    ));

    return (
        <div className="site-header__topbar topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    {linksList}
                    <div className="topbar__spring" />
                    <div className="topbar__item">
                        <Dropdown
                            title={<FormattedMessage id="topbar.myAccount" defaultMessage="My Account" />}
                            items={accountLinks}
                        />
                    </div>
                    <div className="topbar__item">
                        <DropdownCurrency />
                    </div>
                    <div className="topbar__item">
                        <DropdownLanguage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
