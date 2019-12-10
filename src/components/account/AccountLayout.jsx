// react
import React from 'react';

// third-party
import classNames from 'classnames';
import {
    Link,
    matchPath,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';

// pages
import AccountPageAddresses from './AccountPageAddresses';
import AccountPageDashboard from './AccountPageDashboard';
import AccountPageOrders from './AccountPageOrders';
import AccountPagePassword from './AccountPagePassword';
import AccountPageProfile from './AccountPageProfile';


export default function AccountLayout(props) {
    const { match, location } = props;

    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'My Account', url: '' },
    ];

    const links = [
        { title: 'Dashboard', url: 'dashboard' },
        { title: 'Edit Profile', url: 'profile' },
        { title: 'Order History', url: 'orders' },
        { title: 'Addresses', url: 'addresses' },
        { title: 'Password', url: 'password' },
        { title: 'Logout', url: 'login' },
    ].map((link) => {
        const url = `${match.url}/${link.url}`;
        const isActive = matchPath(location.pathname, { path: url });
        const classes = classNames('account-nav__item', {
            'account-nav__item--active': isActive,
        });

        return (
            <li key={link.url} className={classes}>
                <Link to={url}>{link.title}</Link>
            </li>
        );
    });

    return (
        <React.Fragment>
            <PageHeader header="My Account" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 d-flex">
                            <div className="account-nav flex-grow-1">
                                <h4 className="account-nav__title">Navigation</h4>
                                <ul>{links}</ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                            <Switch>
                                <Redirect exact from={match.path} to={`${match.path}/dashboard`} />
                                <Route exact path={`${match.path}/dashboard`} component={AccountPageDashboard} />
                                <Route exact path={`${match.path}/profile`} component={AccountPageProfile} />
                                <Route exact path={`${match.path}/orders`} component={AccountPageOrders} />
                                <Route exact path={`${match.path}/addresses`} component={AccountPageAddresses} />
                                <Route exact path={`${match.path}/password`} component={AccountPagePassword} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
