// react
import React from 'react';

// third-party
import { Link } from 'react-router-dom';


function WidgetTags() {
    return (
        <div className="widget-tags widget">
            <h4 className="widget__title">Tags Cloud</h4>
            <div className="tags tags--lg">
                <div className="tags__list">
                    <Link to="/">Promotion</Link>
                    <Link to="/">Power Tool</Link>
                    <Link to="/">New Arrivals</Link>
                    <Link to="/">Screwdriver</Link>
                    <Link to="/">Wrench</Link>
                    <Link to="/">Mounts</Link>
                    <Link to="/">Electrodes</Link>
                    <Link to="/">Chainsaws</Link>
                    <Link to="/">Manometers</Link>
                    <Link to="/">Nails</Link>
                    <Link to="/">Air Guns</Link>
                    <Link to="/">Cutting Discs</Link>
                </div>
            </div>
        </div>
    );
}

export default WidgetTags;
