// react
import React from 'react';

// data stubs
import theme from '../../data/theme';


function WidgetAboutus() {
    const links = [
        {
            key: 'rss',
            url: theme.author.profile_url,
            iconClass: 'fas fa-rss',
        },
        {
            key: 'youtube',
            url: theme.author.profile_url,
            iconClass: 'fab fa-youtube',
        },
        {
            key: 'facebook',
            url: theme.author.profile_url,
            iconClass: 'fab fa-facebook-f',
        },
        {
            key: 'twitter',
            url: theme.author.profile_url,
            iconClass: 'fab fa-twitter',
        },
        {
            key: 'instagram',
            url: theme.author.profile_url,
            iconClass: 'fab fa-instagram',
        },
    ].map((item) => {
        const itemClasses = `widget-aboutus__link widget-aboutus__link--${item.key}`;
        const iconClasses = `widget-social__icon ${item.iconClass}`;

        return (
            <li key={item.key}>
                <a className={itemClasses} href={theme.author.profile_url} target=" _blank">
                    <i className={iconClasses} />
                </a>
            </li>
        );
    });

    return (
        <div className="widget-aboutus widget">
            <h4 className="widget__title">About Blog</h4>
            <div className="widget-aboutus__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in
                malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque.
                Quisque id sodales libero.
            </div>
            <div className="widget-aboutus__socials">
                <ul>
                    {links}
                </ul>
            </div>
        </div>
    );
}

export default WidgetAboutus;
