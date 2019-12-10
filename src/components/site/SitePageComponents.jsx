// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import PageHeader from '../shared/PageHeader';
import { Cross12Svg, Quickview16Svg } from '../../svg';

// data stubs
import theme from '../../data/theme';


function SitePageComponents() {
    const breadcrumb = [
        { title: 'Home', url: '' },
        { title: 'Components', url: '' },
    ];

    const buttons = ['primary', 'secondary', 'light'].map((style) => {
        const styleName = style.charAt(0).toUpperCase() + style.slice(1);

        return (
            <div key={style} className="col-lg-4">
                <p><strong>{`${styleName} Buttons`}</strong></p>

                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-xl`}>Extra Large</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-xl btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-lg`}>Button Large</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-lg btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style}`}>Button Normal</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-sm`}>Button Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-sm btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-xs`}>Extra Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-xs btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>

                <p><strong>Loading State</strong></p>

                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-loading btn-xl`}>Extra Large</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-loading btn-xl btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-loading btn-lg`}>Button Large</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-loading btn-lg btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-loading`}>Button Normal</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-loading btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-loading btn-sm`}>Button Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-loading btn-sm btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-loading btn-xs`}>Extra Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-loading btn-xs btn-svg-icon`}>
                        <Quickview16Svg />
                    </button>
                </div>

                <p><strong>Disabled State</strong></p>

                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-lg`} disabled>Button Large</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-lg btn-svg-icon`} disabled>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style}`} disabled>Button Normal</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-svg-icon`} disabled>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-sm`} disabled>Button Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-sm btn-svg-icon`} disabled>
                        <Quickview16Svg />
                    </button>
                </div>
                <div className="form-group">
                    <button type="button" className={`btn btn-${style} btn-xs`} disabled>Extra Small</button>
                    {' '}
                    <button type="button" className={`btn btn-${style} btn-xs btn-svg-icon`} disabled>
                        <Quickview16Svg />
                    </button>
                </div>
            </div>
        );
    });

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Components — ${theme.name}`}</title>
            </Helmet>

            <PageHeader header="Components" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-primary alert-lg mb-3 alert-dismissible fade show">
                                A simple large alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.

                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <Cross12Svg />
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="alert alert-info mb-3">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                            <div className="alert alert-primary mb-3">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                            <div className="alert alert-secondary mb-3 mb-md-5">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="alert alert-success mb-3">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                            <div className="alert alert-danger mb-3">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                            <div className="alert alert-warning mb-5">
                                A simple alert with
                                {' '}
                                <Link to="/">an example link</Link>
                                . Give it a click if you like.
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4">
                            <p><strong>Text Field</strong></p>

                            <div className="form-group">
                                <label htmlFor="input-default">Default</label>
                                <input id="input-default" type="text" className="form-control" placeholder="Placeholder" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-readonly">Readonly</label>
                                <input id="input-readonly" type="text" className="form-control" placeholder="Placeholder" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-disabled">Disabled</label>
                                <input id="input-disabled" type="text" className="form-control" placeholder="Placeholder" disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-success">Success</label>
                                <input id="input-success" type="text" className="form-control is-valid" placeholder="Placeholder" />
                                <div className="valid-feedback">Example invalid feedback text</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-error">Error</label>
                                <input id="input-error" type="text" className="form-control is-invalid" placeholder="Placeholder" />
                                <div className="invalid-feedback">Example invalid feedback text</div>
                            </div>

                            <p className="mt-5"><strong>Text Field Sizes</strong></p>

                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Large" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Normal" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-sm" placeholder="Small" />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p><strong>Select</strong></p>

                            <div className="form-group">
                                <label htmlFor="select-default">Default</label>
                                <select id="select-default" className="form-control">
                                    <option>Select value...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-disabled">Disabled</label>
                                <select id="select-disabled" className="form-control" disabled>
                                    <option>Select value...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-success">Success</label>
                                <select id="select-success" className="form-control is-valid">
                                    <option>Select value...</option>
                                </select>
                                <div className="valid-feedback">Example invalid feedback text</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="select-error">Error</label>
                                <select id="select-error" className="form-control is-invalid">
                                    <option>Select value...</option>
                                </select>
                                <div className="invalid-feedback">Example invalid feedback text</div>
                            </div>

                            <p className="mt-5"><strong>Text Field Sizes</strong></p>

                            <div className="form-group">
                                <select className="form-control form-control-lg">
                                    <option>Large...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Large...</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-sm">
                                    <option>Large...</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p><strong>Textarea</strong></p>

                            <div className="form-group">
                                <label htmlFor="textarea-default">Default</label>
                                <textarea id="textarea-default" rows="3" className="form-control" placeholder="Placeholder" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea-readonly">Readonly</label>
                                <textarea id="textarea-readonly" rows="3" className="form-control" placeholder="Placeholder" readOnly />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea-disabled">Disabled</label>
                                <textarea id="textarea-disabled" rows="3" className="form-control" placeholder="Placeholder" disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea-success">Success</label>
                                <textarea id="textarea-success" rows="3" className="form-control is-valid" placeholder="Placeholder" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea-error">Error</label>
                                <textarea id="textarea-error" rows="3" className="form-control is-invalid" placeholder="Placeholder" />
                            </div>

                            <p className="mt-5"><strong>Textarea Sizes</strong></p>
                            <div className="form-group">
                                <textarea rows="3" className="form-control form-control-lg" placeholder="Large" />
                            </div>
                            <div className="form-group">
                                <textarea rows="3" className="form-control" placeholder="Normal" />
                            </div>
                            <div className="form-group">
                                <textarea rows="3" className="form-control form-control-sm" placeholder="Small" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {buttons}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SitePageComponents;
