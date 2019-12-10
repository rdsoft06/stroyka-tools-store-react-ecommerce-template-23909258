// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';

// application
import {
    ManuFactureSvg,
    LightBulbSvg,
    CalendarSvg,
} from '../../svg';


export default function BlockFeatures(props) {
    const { layout } = props;

    return (
        <div className={`block block-features block-features--layout--${layout}`}>
            <div className="container">
                <div className="block-features__list">
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <ManuFactureSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Fournisseurs</div>
                            <div className="block-features__subtitle">Découvrez notre annuaire complet de tous les fournisseurs du batiment.</div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <LightBulbSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Inspiration</div>
                            <div className="block-features__subtitle">Consultez notre rubrique inspiration pour plus d'idées déco.</div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <CalendarSvg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Événement</div>
                            <div className="block-features__subtitle">Foires, évènements, lancement de produits restez connectés.</div>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    );
}

BlockFeatures.propTypes = {
    layout: PropTypes.oneOf(['classic', 'boxed']),
};

BlockFeatures.defaultProps = {
    layout: 'classic',
};
