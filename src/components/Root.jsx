// react
import React, { Component } from 'react';

// third-party
import PropTypes from 'prop-types';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

// application
import messages from '../i18n';

// pages
import Layout from './Layout';
import HomePageOne from './home/HomePageOne';


class Root extends Component {
    componentDidMount() {
        setTimeout(() => {
            const preloader = document.querySelector('.site-preloader');

            preloader.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'opacity') {
                    preloader.parentNode.removeChild(preloader);
                }
            });
            preloader.classList.add('site-preloader__fade');
        }, 500);
    }

    render() {
        const { locale } = this.props;

        return (
            <IntlProvider locale={locale} messages={messages[locale]}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route
                            path="/"
                            render={(props) => (
                                <Layout {...props} headerLayout="default" homeComponent={HomePageOne} />
                            )}
                        />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

Root.propTypes = {
    /** current locale */
    locale: PropTypes.string,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(Root);
