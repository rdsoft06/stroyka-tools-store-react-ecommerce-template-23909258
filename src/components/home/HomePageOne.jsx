// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockSlideShow from '../blocks/BlockSlideShow';
import BlockTabbedProductsCarousel from '../blocks/BlockTabbedProductsCarousel';

// data stubs
import categories from '../../data/shopBlockCategories';
import posts from '../../data/blogPosts';
import products from '../../data/shopProducts';


function HomePageOne() {
    const columns = [
        {
            title: 'Top Rated Products',
            products: products.slice(0, 3),
        },
        {
            title: 'Special Offers',
            products: products.slice(3, 6),
        },
        {
            title: 'Bestsellers',
            products: products.slice(6, 9),
        },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`BSMART`}</title>
            </Helmet>

            <BlockSlideShow withDepartments />

            <BlockFeatures />

            <BlockTabbedProductsCarousel title="Produits populaires" layout="grid-4" />

            <BlockBanner />

            <BlockProducts
                title="Bestsellers"
                layout="large-first"
                featuredProduct={products[0]}
                products={products.slice(1, 7)}
            />

            <BlockCategories title="Popular Categories" layout="classic" categories={categories} />

            <BlockTabbedProductsCarousel title="New Arrivals" layout="horizontal" rows={2} />

            <BlockPosts title="Latest News" layout="list-sm" posts={posts} />

            <BlockBrands />

            <BlockProductColumns columns={columns} />
        </React.Fragment>
    );
}

export default HomePageOne;
