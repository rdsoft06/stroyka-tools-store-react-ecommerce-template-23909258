// react
import React from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// application
import BlogCommentsList from './BlogCommentsList';

// data stubs
import comments from '../../data/blogPostComments';
import posts from '../../data/blogPosts';


export default function BlogPost(props) {
    const { layout } = props;

    const postClasses = classNames('post__content typography', {
        'typography--expanded': layout === 'full',
    });

    const relatedPostsList = posts.slice(0, 2).map((relatedPost) => (
        <div key={relatedPost.id} className="related-posts__item post-card post-card--layout--related">
            <div className="post-card__image">
                <Link to="/">
                    <img src={relatedPost.image} alt="" />
                </Link>
            </div>
            <div className="post-card__info">
                <div className="post-card__name">
                    <Link to="/">{relatedPost.title}</Link>
                </div>
                <div className="post-card__date">{relatedPost.date}</div>
            </div>
        </div>
    ));

    return (
        <div className={`block post post--layout--${layout}`}>
            <div className={`post__header post-header post-header--layout--${layout}`}>
                <div className="post-header__categories">
                    <Link to="/">Latest news</Link>
                </div>
                <h1 className="post-header__title">Morbi Interdum Velit Quis Magna Placerat Lobortis Eget</h1>
                <div className="post-header__meta">
                    <div className="post-header__meta-item">
                        By
                        <Link to="/">Jessica Moore</Link>
                    </div>
                    <div className="post-header__meta-item"><Link to="/">November 30, 2018</Link></div>
                    <div className="post-header__meta-item"><Link to="/">4 Comments</Link></div>
                </div>
            </div>

            <div className="post__featured">
                <Link to="/">
                    <img src="images/posts/post-featured.jpg" alt="" />
                </Link>
            </div>

            <div className={postClasses}>
                <p>
                    Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi
                    interdum velit quis magna placerat lobortis eget pharetra magna. Nulla
                    tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla
                    vestibulum ipsum risus, vitae maximus nunc bibendum quis.
                </p>
                <p>
                    raesent eu consequat nibh. Quisque
                    <i>ullamcorper</i>
                    , augue eu fringillasodales, leo metus volutpat risus, at suscipit ipsum
                    diam eget sem. Maecenas dictum elit in enim molestie,
                    <Link to="/">vel sollicitudin erat ultricies</Link>
                    . Sed risus tellus, molestie finibus
                    dui quis, suscipit consequat ex.
                </p>
                <blockquote>
                    <p>
                        Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et
                        semper placerat. Proin at lectus felis.
                    </p>
                    <p><cite>John Mcarthy</cite></p>
                </blockquote>
                <p>
                    Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et
                    ultrices. Donec sit amet sem lobortis, ullamcorper felis at, finibus sem.
                    Curabitur tincidunt neque nunc.
                </p>
                <h3>Nam Eget Blandit Diam</h3>
                <p>
                    Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras
                    efficitur, ante vitae fringilla rutrum, mi tortor dapibus metus, in egestas
                    metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam eget
                    blandit diam, imperdiet condimentum neque. Donec risus nisi, aliquet a commodo
                    ac, elementum vitae leo.
                </p>
                <p>
                    Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi
                    interdum velit quis magna placerat lobortis eget pharetra magna.
                </p>
                <p>
                    <strong>Nulla fringilla:</strong>
                    <Link to="/">Donec aliquet at felis et dignissim</Link>
                </p>
                <figure>
                    <Link to="/">
                        <img src="images/posts/post-featured.jpg" alt="" />
                    </Link>
                    <figcaption>Nunc viverra, dui nec commodo dignissim, libero arcu.</figcaption>
                </figure>
                <p>
                    Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris
                    quis laoreet velit. Suspendisse sed velit nec ante facilisis pharetra.
                </p>
                <p>
                    Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu
                    consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus
                    volutpat risus,
                    <Link to="/">at suscipit ipsum diam eget sem</Link>
                    . Maecenas dictum elit in enim molestie,
                    vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis,
                    suscipit consequat ex.
                </p>
                <hr />
                <h2>Nunc Dapibus Varius Ligula</h2>
                <p>
                    Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac
                    tincidunt ante fermentum at. Vestibulum non varius lectus. Cras vel elit id
                    ligula laoreet imperdiet. Mauris quis laoreet velit. Suspendisse sed velit
                    nec ante facilisis pharetra. Duis vitae fermentum elit. Integer ac mattis elit.
                </p>
                <p>
                    Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis:
                </p>
                <ol>
                    <li>
                        Duis
                        <strong>finibus imperdiet ultricies</strong>
                        . Donec vel pretium turpis. In auctor euismod posuere.
                    </li>
                    <li>
                        Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum
                        non varius lectus. Cras vel elit id ligula laoreet imperdiet.
                    </li>
                    <li>
                        <strong>In iaculis porttitor luctus</strong>
                        . Maecenas ultricies dolor et semper placerat. Proin at lectus felis.
                        Quisque dapibus auctor justo id dictum.
                    </li>
                </ol>
                <p>
                    Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet
                    condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.
                </p>
            </div>

            <div className="post__footer">
                <div className="post__tags-share-links">
                    <div className="post__tags tags">
                        <div className="tags__list">
                            <Link to="/">Promotion</Link>
                            <Link to="/">Power Tool</Link>
                            <Link to="/">Wrench</Link>
                            <Link to="/">Electrodes</Link>
                        </div>
                    </div>
                    <div className="post__share-links share-links">
                        <ul className="share-links__list">
                            <li className="share-links__item share-links__item--type--like"><Link to="/">Like</Link></li>
                            <li className="share-links__item share-links__item--type--tweet"><Link to="/">Tweet</Link></li>
                            <li className="share-links__item share-links__item--type--pin"><Link to="/">Pin It</Link></li>
                            <li className="share-links__item share-links__item--type--counter"><Link to="/">4K</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="post-author">
                    <div className="post-author__avatar">
                        <Link to="/"><img src="images/avatars/avatar-1.jpg" alt="" /></Link>
                    </div>
                    <div className="post-author__info">
                        <div className="post-author__name">
                            <Link to="/">Jessica Moore</Link>
                        </div>
                        <div className="post-author__about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                </div>
            </div>
            <section className="post__section">
                <h4 className="post__section-title">Related Posts</h4>
                <div className="related-posts">
                    <div className="related-posts__list">
                        {relatedPostsList}
                    </div>
                </div>
            </section>

            <section className="post__section">
                <h4 className="post__section-title">{`Comments (${comments.count})`}</h4>

                <BlogCommentsList comments={comments.items} />
            </section>

            <section className="post__section">
                <h4 className="post__section-title">Write A Comment</h4>

                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-first-name">First Name</label>
                            <input type="text" className="form-control" id="comment-first-name" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-last-name">Last Name</label>
                            <input type="text" className="form-control" id="comment-last-name" placeholder="Last Name" />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="comment-email">Email Address</label>
                            <input type="email" className="form-control" id="comment-email" placeholder="Email Address" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment-content">Comment</label>
                        <textarea className="form-control" id="comment-content" rows="6" />
                    </div>
                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary btn-lg">Post Comment</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

BlogPost.propTypes = {
    /**
     * post layout
     * one of ['classic', 'full'] (default: 'classic')
     */
    layout: PropTypes.oneOf(['classic', 'full']),
};

BlogPost.defaultProps = {
    layout: 'classic',
};
