import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Nouns Blog</title>
        <meta
          name='description'
          content='A blog about Noun DAO events at NYC NFT.'
        /> 
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1080,
  };
}

export default HomePage;
