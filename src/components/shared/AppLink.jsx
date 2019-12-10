// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function AppLink(props) {
    const { external, children, ...otherProps } = props;
    let link;

    if (external) {
        const {
            to,
            replace,
            innerRef,
            ...linkProps
        } = otherProps;

        link = <a href={to} {...linkProps}>{children}</a>;
    } else {
        link = <Link {...otherProps}>{children}</Link>;
    }

    return link;
}

AppLink.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string,
            hash: PropTypes.string,
            state: PropTypes.any,
        }),
    ]).isRequired,
    replace: PropTypes.bool,
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]),
    external: PropTypes.bool,
};
AppLink.defaultProps = {
    external: false,
};

export default AppLink;
