// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function WidgetComments(props) {
    const { comments } = props;
    const commentsList = comments.map((comment) => (
        <li key={comment.id} className="widget-comments__item">
            <div className="widget-comments__author">
                <Link to="/">{comment.author}</Link>
            </div>
            <div className="widget-comments__content">{comment.text}</div>
            <div className="widget-comments__meta">
                <div className="widget-comments__date">{comment.date}</div>
                <div className="widget-comments__name">
                    On
                    <Link to="/" title={comment.postTitle}>{comment.postTitle}</Link>
                </div>
            </div>
        </li>
    ));

    return (
        <div className="widget-comments widget">
            <h4 className="widget__title">Latest Comments</h4>
            <ul className="widget-comments__list">
                {commentsList}
            </ul>
        </div>
    );
}

WidgetComments.propTypes = {
    /**
     * array of comments
     */
    comments: PropTypes.array,
};
WidgetComments.defaultProps = {
    comments: [],
};

export default WidgetComments;
