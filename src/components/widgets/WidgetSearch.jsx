// react
import React from 'react';

// application
import { Search20Svg } from '../../svg';


function WidgetSearch() {
    return (
        <div className="widget-search">
            <form className="widget-search__body">
                <input className="widget-search__input" placeholder="Blog search..." type="text" autoComplete="off" spellCheck="false" />
                <button className="widget-search__button" type="submit">
                    <Search20Svg />
                </button>
            </form>
        </div>
    );
}

export default WidgetSearch;
