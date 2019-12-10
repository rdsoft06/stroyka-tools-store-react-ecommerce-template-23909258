// react
import React, { Component } from 'react';

// third-party
import PropTypes from 'prop-types';

// application
import BlockHeader from '../shared/BlockHeader';
import PostCard from '../shared/PostCard';
import SlickWithPreventSwipeClick from '../shared/SlickWithPreventSwipeClick';


const slickSettings = {
    'grid-nl': {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    },
    'list-sm': {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    },
};

export default class BlockPosts extends Component {
    handleNextClick = () => {
        if (this.slickRef) {
            this.slickRef.slickNext();
        }
    };

    handlePrevClick = () => {
        if (this.slickRef) {
            this.slickRef.slickPrev();
        }
    };

    setSlickRef = (ref) => {
        this.slickRef = ref;
    };

    render() {
        const { title, layout, posts } = this.props;

        const postsList = posts.map((post) => <PostCard key={post.id} post={post} />);

        return (
            <div className={`block block-posts block-posts--layout--${layout}`} data-layout={layout}>
                <div className="container">
                    <BlockHeader
                        arrows
                        title={title}
                        onNext={this.handleNextClick}
                        onPrev={this.handlePrevClick}
                    />

                    <div className="block-posts__slider">
                        <SlickWithPreventSwipeClick
                            ref={this.setSlickRef}
                            {...slickSettings[layout]}
                        >
                            {postsList}
                        </SlickWithPreventSwipeClick>
                    </div>
                </div>
            </div>
        );
    }
}

BlockPosts.propTypes = {
    title: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(['list-sm', 'grid-nl']),
    posts: PropTypes.array,
};

BlockPosts.defaultProps = {
    layout: 'list-sm',
    posts: [],
};
