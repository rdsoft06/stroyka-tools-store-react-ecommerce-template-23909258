// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// application
import Footer from './footer';
import Header from './header';
import MobileHeader from './mobile/MobileHeader';
import MobileMenu from './mobile/MobileMenu';
import Quickview from './shared/Quickview';

// pages
import AccountLayout from './account/AccountLayout';
import AccountPageLogin from './account/AccountPageLogin';
import BlogPageCategory from './blog/BlogPageCategory';
import SitePageAboutUs from './site/SitePageAboutUs';
import PageCart from './shop/ShopPageCart';
import PageCheckout from './shop/ShopPageCheckout';
import PageCompare from './shop/ShopPageCompare';
import SitePageComponents from './site/SitePageComponents';
import SitePageContactUs from './site/SitePageContactUs';
import SitePageContactUsAlt from './site/SitePageContactUsAlt';
import SitePageFaq from './site/SitePageFaq';
import SitePageNotFound from './site/SitePageNotFound';
import BlogPagePost from './blog/BlogPagePost';
import ShopPageProduct from './shop/ShopPageProduct';
import SitePageTerms from './site/SitePageTerms';
import ShopPageTrackOrder from './shop/ShopPageTrackOrder';
import SitePageTypography from './site/SitePageTypography';
import PageWishlist from './shop/ShopPageWishlist';
import ShopPageCategory from './shop/ShopPageCategory';

// data stubs
import theme from '../data/theme';


function Layout(props) {
    const { match, headerLayout, homeComponent } = props;

    return (
        <React.Fragment>
            <Helmet>
                <title>{theme.name}</title>
                <meta name="description" content={theme.fullName} />
            </Helmet>

            <ToastContainer autoClose={5000} hideProgressBar />

            <Quickview />

            <MobileMenu />

            <div className="site">
                <header className="site__header d-lg-none">
                    <MobileHeader />
                </header>

                <header className="site__header d-lg-block d-none">
                    <Header layout={headerLayout} />
                </header>

                <div className="site__body">
                    <Switch>
                        {/*
                        // Home
                        */}
                        <Route exact path={`${match.path}`} component={homeComponent} />

                        {/*
                        // Shop
                        */}
                        <Redirect exact from="/shop" to="/shop/category-grid-3-columns-sidebar" />
                        <Route
                            exact
                            path="/shop/category-grid-3-columns-sidebar"
                            render={(props) => (
                                <ShopPageCategory {...props} columns={3} viewMode="grid" sidebarPosition="start" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/category-grid-4-columns-full"
                            render={(props) => (
                                <ShopPageCategory {...props} columns={4} viewMode="grid" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/category-grid-5-columns-full"
                            render={(props) => (
                                <ShopPageCategory {...props} columns={5} viewMode="grid" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/category-list"
                            render={(props) => (
                                <ShopPageCategory {...props} columns={3} viewMode="list" sidebarPosition="start" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/category-right-sidebar"
                            render={(props) => (
                                <ShopPageCategory {...props} columns={3} viewMode="grid" sidebarPosition="end" />
                            )}
                        />

                        <Route exact path="/shop/product/:productId" component={ShopPageProduct} />
                        <Route
                            exact
                            path="/shop/product-standard"
                            render={(props) => (
                                <ShopPageProduct {...props} layout="standard" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/product-columnar"
                            render={(props) => (
                                <ShopPageProduct {...props} layout="columnar" />
                            )}
                        />
                        <Route
                            exact
                            path="/shop/product-sidebar"
                            render={(props) => (
                                <ShopPageProduct {...props} layout="sidebar" />
                            )}
                        />

                        <Route exact path="/shop/cart" component={PageCart} />
                        <Route exact path="/shop/checkout" component={PageCheckout} />
                        <Route exact path="/shop/wishlist" component={PageWishlist} />
                        <Route exact path="/shop/compare" component={PageCompare} />
                        <Route exact path="/shop/track-order" component={ShopPageTrackOrder} />

                        {/*
                        // Blog
                        */}
                        <Redirect exact from="/blog" to="/blog/category-classic" />
                        <Route
                            exact
                            path="/blog/category-classic"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="classic" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-grid"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="grid" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-list"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="list" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/category-left-sidebar"
                            render={(props) => (
                                <BlogPageCategory {...props} layout="classic" sidebarPosition="start" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/post-classic"
                            render={(props) => (
                                <BlogPagePost {...props} layout="classic" sidebarPosition="end" />
                            )}
                        />
                        <Route
                            exact
                            path="/blog/post-full"
                            render={(props) => (
                                <BlogPagePost {...props} layout="full" />
                            )}
                        />

                        {/*
                        // Account
                        */}
                        <Route exact path="/account/login" component={AccountPageLogin} />
                        <Route path="/account" component={AccountLayout} />

                        {/*
                        // Site
                        */}
                        <Redirect exact from="/site" to="/site/about-us" />
                        <Route exact path="/site/about-us" component={SitePageAboutUs} />
                        <Route exact path="/site/components" component={SitePageComponents} />
                        <Route exact path="/site/contact-us" component={SitePageContactUs} />
                        <Route exact path="/site/contact-us-alt" component={SitePageContactUsAlt} />
                        <Route exact path="/site/not-found" component={SitePageNotFound} />
                        <Route exact path="/site/faq" component={SitePageFaq} />
                        <Route exact path="/site/terms" component={SitePageTerms} />
                        <Route exact path="/site/typography" component={SitePageTypography} />

                        {/*
                        // Page Not Found
                        */}
                        <Route component={SitePageNotFound} />
                    </Switch>
                </div>

                <footer className="site__footer">
                    <Footer />
                </footer>
            </div>
        </React.Fragment>
    );
}

Layout.propTypes = {
    /**
     * header layout (default: 'classic')
     * one of ['classic', 'compact']
     */
    headerLayout: PropTypes.oneOf(['default', 'compact']),
    /**
     * home component
     */
    homeComponent: PropTypes.elementType.isRequired,
};

Layout.defaultProps = {
    headerLayout: 'default',
};

export default Layout;
