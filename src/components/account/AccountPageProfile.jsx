// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// data stubs
import theme from '../../data/theme';


export default function AccountPageProfile() {
    return (
        <div className="card">
            <Helmet>
                <title>{`Profile — ${theme.name}`}</title>
            </Helmet>

            <div className="card-header">
                <h5>Edit Profile</h5>
            </div>
            <div className="card-divider" />
            <div className="card-body">
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="profile-first-name">First Name</label>
                            <input
                                id="profile-first-name"
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-last-name">Last Name</label>
                            <input
                                id="profile-last-name"
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-email">Email Address</label>
                            <input
                                id="profile-email"
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profile-phone">Phone Number</label>
                            <input
                                id="profile-phone"
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="form-group mt-5 mb-0">
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
