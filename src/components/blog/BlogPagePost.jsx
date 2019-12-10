// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// application
import PageHeader from '../shared/PageHeader';
import BlogPost from './BlogPost';
import BlogSidebar from './BlogSidebar';

// data stubs
import theme from '../../data/theme';


export default function BlogPagePost(props) {
    const { layout, sidebarPosition } = props;

    let content;

    if (layout === 'classic') {
        const sidebar = <BlogSidebar position={sidebarPosition} />;

        let sidebarStart;
        let sidebarEnd;

        if (sidebarPosition === 'start') {
            sidebarStart = <div className="col-12 col-lg-4 order-1 order-lg-0">{sidebar}</div>;
        }
        if (sidebarPosition === 'end') {
            sidebarEnd = <div className="col-12 col-lg-4">{sidebar}</div>;
        }

        content = (
            <div className="row">
                {sidebarStart}
                <div className="col-12 col-lg-8">
                    <BlogPost layout={layout} />
                </div>
                {sidebarEnd}
            </div>
        );
    } else if (layout === 'full') {
        content = (
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9 col-xl-8">
                    <BlogPost layout={layout} />
                </div>
            </div>
        );
    }

    const breadcrumbs = [
        { title: 'Home', url: '' },
        { title: 'Blog', url: '' },
        { title: 'Latest News', url: '' },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Blog Post Page — ${theme.name}`}</title>
            </Helmet>

            <PageHeader breadcrumb={breadcrumbs} />

            <div className="container">{content}</div>
        </React.Fragment>
    );
}

BlogPagePost.propTypes = {
    /**
     * post layout
     * one of ['classic', 'full'] (default: 'classic')
     */
    layout: PropTypes.oneOf(['classic', 'full']),
    /**
     * sidebar position (default: 'start')
     * one of ['start', 'end']
     * for LTR scripts "start" is "left" and "end" is "right"
     */
    sidebarPosition: PropTypes.oneOf(['start', 'end']),
};

BlogPagePost.defaultProps = {
    layout: 'classic',
    sidebarPosition: 'start',
};
