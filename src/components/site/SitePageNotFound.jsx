// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// data stubs
import theme from '../../data/theme';


function SitePageNotFound() {
    return (
        <div className="block">
            <Helmet>
                <title>{`404 Page Not Found — ${theme.name}`}</title>
            </Helmet>

            <div className="container">
                <div className="not-found">
                    <div className="not-found__404">
                        Oops! Error 404
                    </div>

                    <div className="not-found__content">
                        <h1 className="not-found__title">Page Not Found</h1>

                        <p className="not-found__text">
                            We can&apos;t seem to find the page you&apos;re looking for.
                            <br />
                            Try to use the search.
                        </p>

                        <form className="not-found__search">
                            <input type="text" className="not-found__search-input form-control" placeholder="Search Query..." />
                            <button type="submit" className="not-found__search-button btn btn-primary">Search</button>
                        </form>

                        <p className="not-found__text">
                            Or go to the home page to start over.
                        </p>

                        <Link to="/" className="btn btn-secondary btn-sm">Go To Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageNotFound;
