// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// application
import SlickWithPreventSwipeClick from '../shared/SlickWithPreventSwipeClick';

// data stubs
import theme from '../../data/theme';


const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 379,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

function SitePageAboutUs() {
    return (
        <div className="block about-us">
            <Helmet>
                <title>{`About Us — ${theme.name}`}</title>
            </Helmet>

            <div className="about-us__image" style={{ backgroundImage: 'url("images/aboutus.jpg")' }} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                            <h1 className="about-us__title">About Us</h1>
                            <div className="about-us__text typography">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras lacus metus, convallis ut leo nec, tincidunt
                                    eleifend justo. Ut felis orci, hendrerit a pulvinar et,
                                    gravida ac lorem. Sed vitae molestie sapien, at
                                    sollicitudin tortor.
                                </p>
                                <p>
                                    Duis id volutpat libero, id vestibulum purus.Donec euismod
                                    accumsan felis,egestas lobortis velit tempor vitae. Integer
                                    eget velit fermentum, dignissim odio non, bibendum velit.
                                </p>
                            </div>
                            <div className="about-us__team">
                                <h2 className="about-us__team-title">Meat Our Team</h2>
                                <div className="about-us__team-subtitle text-muted">
                                    Want to work in our friendly team?
                                    <br />
                                    <Link to="/site/contact-us">Contact us</Link>
                                    {' '}
                                    and we will consider your candidacy.
                                </div>
                                <div className="about-us__teammates teammates">
                                    <SlickWithPreventSwipeClick {...slickSettings}>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-1.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Michael Russo</div>
                                            <div className="teammate__position text-muted">Chief Executive Officer</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-2.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Katherine Miller</div>
                                            <div className="teammate__position text-muted">Marketing Officer</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-3.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Anthony Harris</div>
                                            <div className="teammate__position text-muted">Finance Director</div>
                                        </div>
                                    </SlickWithPreventSwipeClick>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
