// react
import React from 'react';

// third-party
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// application
import Dropdown from './Dropdown';
import { localeChange } from '../../store/locale';


function DropdownLanguage(props) {
    const { locale, localeChange: changeLocale } = props;

    const languages = [
        {
            title: 'Francais',
            locale: 'fr',
            code: 'FR',
            icon: 'images/languages/language-2.png',
            icon_srcset: 'images/languages/language-2.png 1x, images/languages/language-2@2x.png 2x',
        },
         {
            title: 'English',
            locale: 'en',
            code: 'EN',
            icon: 'images/languages/language-1.png',
            icon_srcset: 'images/languages/language-1.png 1x, images/languages/language-1@2x.png 2x',
        },
    ];

    const language = languages.find((x) => x.locale === locale);

    const title = (
        <React.Fragment>
            <FormattedMessage id="topbar.language" defaultMessage="Language" />
            {': '}
            <span className="topbar__item-value">{language.code}</span>
        </React.Fragment>
    );

    return (
        <Dropdown
            title={title}
            withIcons
            items={languages}
            onClick={(item) => changeLocale(item.locale)}
        />
    );
}

const mapStateToProps = (state) => ({
    locale: state.locale,
});

const mapDispatchToProps = {
    localeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLanguage);
