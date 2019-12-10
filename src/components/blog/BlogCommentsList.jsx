// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function BlogCommentsList(props) {
    const { level, comments } = props;

    const commentsList = comments.map((comment) => {
        let children;

        if (comment.children && comment.children.length) {
            children = (
                <div>
                    <BlogCommentsList comments={comment.children} level={level + 1} />
                </div>
            );
        }

        return (
            <li key={comment.id} className="comments-list__item">
                <div className="comment">
                    <div className="comment__avatar">
                        <Link to="/"><img src={comment.avatar} alt="" /></Link>
                    </div>
                    <div className="comment__content">
                        <div className="comment__header">
                            <div className="comment__author">
                                <Link to="/">{comment.author}</Link>
                            </div>
                            <div className="comment__reply">
                                <button type="button" className="btn btn-xs btn-light">Reply</button>
                            </div>
                        </div>
                        <div className="comment__text">{comment.text}</div>
                        <div className="comment__date">{comment.date}</div>
                    </div>
                </div>
                {children}
            </li>
        );
    });

    return (
        <ol className={`comments-list comments-list--level--${level}`}>
            {commentsList}
        </ol>
    );
}

BlogCommentsList.propTypes = {
    comments: PropTypes.array,
    level: PropTypes.number,
};

BlogCommentsList.defaultProps = {
    comments: [],
    level: 0,
};

export default BlogCommentsList;
