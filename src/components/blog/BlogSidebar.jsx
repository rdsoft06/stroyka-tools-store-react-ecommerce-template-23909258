// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

// widgets
import WidgetAboutus from '../widgets/WidgetAboutus';
import WidgetCategories from '../widgets/WidgetCategories';
import WidgetComments from '../widgets/WidgetComments';
import WidgetNewsletter from '../widgets/WidgetNewsletter';
import WidgetPosts from '../widgets/WidgetPosts';
import WidgetSearch from '../widgets/WidgetSearch';
import WidgetTags from '../widgets/WidgetTags';

// data stubs
import categories from '../../data/blogWidgetCategories';
import comments from '../../data/blogWidgetLatestComments';
import posts from '../../data/blogPosts';


export default function BlogSidebar(props) {
    const { position } = props;

    return (
        <div className={`block block-sidebar block-sidebar--position--${position}`}>
            <div className="block-sidebar__item">
                <WidgetSearch />
            </div>
            <div className="block-sidebar__item">
                <WidgetAboutus />
            </div>
            <div className="block-sidebar__item">
                <WidgetCategories categories={categories} />
            </div>
            <div className="block-sidebar__item">
                <WidgetPosts posts={posts.slice(0, 3)} />
            </div>
            <div className="block-sidebar__item">
                <WidgetNewsletter />
            </div>
            <div className="block-sidebar__item">
                <WidgetComments comments={comments.slice(0, 3)} />
            </div>
            <div className="block-sidebar__item">
                <WidgetTags />
            </div>
        </div>
    );
}

BlogSidebar.propTypes = {
    /**
     * sidebar position (default: 'start')
     * one of ['start', 'end']
     * for LTR scripts "start" is "left" and "end" is "right"
     */
    position: PropTypes.oneOf(['start', 'end']),
};

BlogSidebar.defaultProps = {
    position: 'start',
};
