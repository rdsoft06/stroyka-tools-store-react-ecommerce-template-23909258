// react
import React, { Component } from 'react';

// third-party
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';

// application
import Collapse from '../shared/Collapse';
import Currency from '../shared/Currency';
import PageHeader from '../shared/PageHeader';
import { Check9x7Svg } from '../../svg';

// data stubs
import payments from '../../data/shopPayments';
import theme from '../../data/theme';


class ShopPageCheckout extends Component {
    payments = payments;

    constructor(props) {
        super(props);

        this.state = {
            payment: 'bank',
        };
    }

    handlePaymentChange = (event) => {
        if (event.target.checked) {
            this.setState({ payment: event.target.value });
        }
    };

    renderTotals() {
        const { cart } = this.props;

        if (cart.extraLines.length <= 0) {
            return null;
        }

        const extraLines = cart.extraLines.map((extraLine, index) => (
            <tr key={index}>
                <th>{extraLine.title}</th>
                <td><Currency value={extraLine.price} /></td>
            </tr>
        ));

        return (
            <React.Fragment>
                <tbody className="checkout__totals-subtotals">
                    <tr>
                        <th>Subtotal</th>
                        <td><Currency value={cart.subtotal} /></td>
                    </tr>
                    {extraLines}
                </tbody>
            </React.Fragment>
        );
    }

    renderCart() {
        const { cart } = this.props;

        const items = cart.items.map((item) => (
            <tr key={item.id}>
                <td>{`${item.product.name} × ${item.quantity}`}</td>
                <td><Currency value={item.total} /></td>
            </tr>
        ));

        return (
            <table className="checkout__totals">
                <thead className="checkout__totals-header">
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className="checkout__totals-products">
                    {items}
                </tbody>
                {this.renderTotals()}
                <tfoot className="checkout__totals-footer">
                    <tr>
                        <th>Total</th>
                        <td><Currency value={cart.total} /></td>
                    </tr>
                </tfoot>
            </table>
        );
    }

    renderPaymentsList() {
        const { payment: currentPayment } = this.state;

        const payments = this.payments.map((payment) => {
            const renderPayment = ({ setItemRef, setContentRef }) => (
                <li className="payment-methods__item" ref={setItemRef}>
                    <label className="payment-methods__item-header">
                        <span className="payment-methods__item-radio input-radio">
                            <span className="input-radio__body">
                                <input
                                    type="radio"
                                    className="input-radio__input"
                                    name="checkout_payment_method"
                                    value={payment.key}
                                    checked={currentPayment === payment.key}
                                    onChange={this.handlePaymentChange}
                                />
                                <span className="input-radio__circle" />
                            </span>
                        </span>
                        <span className="payment-methods__item-title">{payment.title}</span>
                    </label>
                    <div className="payment-methods__item-container" ref={setContentRef}>
                        <div className="payment-methods__item-description text-muted">{payment.description}</div>
                    </div>
                </li>
            );

            return (
                <Collapse
                    key={payment.key}
                    open={currentPayment === payment.key}
                    toggleClass="payment-methods__item--active"
                    render={renderPayment}
                />
            );
        });

        return (
            <div className="payment-methods">
                <ul className="payment-methods__list">
                    {payments}
                </ul>
            </div>
        );
    }

    render() {
        const { cart } = this.props;

        if (cart.items.length < 1) {
            return <Redirect to="cart" />;
        }

        const breadcrumb = [
            { title: 'Home', url: '' },
            { title: 'Shopping Cart', url: '/shop/cart' },
            { title: 'Checkout', url: '' },
        ];

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`Checkout — ${theme.name}`}</title>
                </Helmet>

                <PageHeader header="Checkout" breadcrumb={breadcrumb} />

                <div className="checkout block">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="alert alert-primary alert-lg">
                                    Returning customer?
                                    {' '}
                                    <Link to="/account/login">Click here to login</Link>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="card mb-lg-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Billing details</h3>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="checkout-first-name">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="checkout-first-name"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="checkout-last-name">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="checkout-last-name"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="checkout-company-name">
                                                Company Name
                                                {' '}
                                                <span className="text-muted">(Optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="checkout-company-name"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-country">Country</label>
                                            <select id="checkout-country" className="form-control">
                                                <option>Select a country...</option>
                                                <option>United States</option>
                                                <option>Russia</option>
                                                <option>Italy</option>
                                                <option>France</option>
                                                <option>Ukraine</option>
                                                <option>Germany</option>
                                                <option>Australia</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-street-address">Street Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="checkout-street-address"
                                                placeholder="Street Address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-address">
                                                Apartment, suite, unit etc.
                                                {' '}
                                                <span className="text-muted">(Optional)</span>
                                            </label>
                                            <input type="text" className="form-control" id="checkout-address" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-city">Town / City</label>
                                            <input type="text" className="form-control" id="checkout-city" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-state">State / County</label>
                                            <input type="text" className="form-control" id="checkout-state" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="checkout-postcode">Postcode / ZIP</label>
                                            <input type="text" className="form-control" id="checkout-postcode" />
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="checkout-email">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="checkout-email"
                                                    placeholder="Email address"
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="checkout-phone">Phone</label>
                                                <input type="text" className="form-control" id="checkout-phone" placeholder="Phone" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <span className="form-check-input input-check">
                                                    <span className="input-check__body">
                                                        <input className="input-check__input" type="checkbox" id="checkout-create-account" />
                                                        <span className="input-check__box" />
                                                        <Check9x7Svg className="input-check__icon" />
                                                    </span>
                                                </span>
                                                <label className="form-check-label" htmlFor="checkout-create-account">
                                                    Create an account?
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-divider" />
                                    <div className="card-body">
                                        <h3 className="card-title">Shipping Details</h3>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <span className="form-check-input input-check">
                                                    <span className="input-check__body">
                                                        <input className="input-check__input" type="checkbox" id="checkout-different-address" />
                                                        <span className="input-check__box" />
                                                        <Check9x7Svg className="input-check__icon" />
                                                    </span>
                                                </span>
                                                <label className="form-check-label" htmlFor="checkout-different-address">
                                                    Ship to a different address?
                                                </label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="checkout-comment">
                                                Order notes
                                                {' '}
                                                <span className="text-muted">(Optional)</span>
                                            </label>
                                            <textarea id="checkout-comment" className="form-control" rows="4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <h3 className="card-title">Your Order</h3>

                                        {this.renderCart()}

                                        {this.renderPaymentsList()}

                                        <div className="checkout__agree form-group">
                                            <div className="form-check">
                                                <span className="form-check-input input-check">
                                                    <span className="input-check__body">
                                                        <input className="input-check__input" type="checkbox" id="checkout-terms" />
                                                        <span className="input-check__box" />
                                                        <Check9x7Svg className="input-check__icon" />
                                                    </span>
                                                </span>
                                                <label className="form-check-label" htmlFor="checkout-terms">
                                                    I have read and agree to the website
                                                    <Link to="site/terms">terms and conditions</Link>
                                                    *
                                                </label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-xl btn-block">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageCheckout);
