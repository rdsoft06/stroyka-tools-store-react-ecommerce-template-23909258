// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

// application
import MegamenuLinks from './MegamenuLinks';


function Megamenu(props) {
    const { menu, location } = props;

    if (!menu) {
        return [];
    }

    const menuStyle = {
        backgroundImage: menu.image ? `url('${menu.image}')` : '',
    };

    const columns = menu.columns.map((column, index) => (
        <div key={index} className={`col-${column.size}`}>
            <MegamenuLinks links={column.links} />
        </div>
    ));

    return (
        <div className={`megamenu megamenu--${location}`} style={menuStyle}>
            <div className="row">
                {columns}
            </div>
        </div>
    );
}

Megamenu.propTypes = {
    /** menu object (required) */
    menu: PropTypes.object,
    /** one of ['nav-links', 'department'] (default: 'nav-links') */
    location: PropTypes.oneOf(['nav-links', 'department']),
};

Megamenu.defaultProps = {
    location: 'nav-links',
};

export default Megamenu;
