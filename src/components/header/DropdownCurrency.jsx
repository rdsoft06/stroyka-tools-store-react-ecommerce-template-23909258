// react
import React from 'react';

// third-party
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

// application
import Dropdown from './Dropdown';
import { currencyChange } from '../../store/currency';

// data stubs
import currencies from '../../data/shopCurrencies';


function DropdownCurrency(props) {
    const { currency, currencyChange: changeCurrency } = props;

    const title = (
        <React.Fragment>
            <FormattedMessage id="topbar.currency" defaultMessage="Currency" />
            {': '}
            <span className="topbar__item-value">{currency.code}</span>
        </React.Fragment>
    );

    return (
        <Dropdown
            title={title}
            items={currencies}
            onClick={(item) => changeCurrency(item.currency)}
        />
    );
}

const mapStateToProps = (state) => ({
    currency: state.currency,
    locale: state.locale,
});

const mapDispatchToProps = {
    currencyChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCurrency);
