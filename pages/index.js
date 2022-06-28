import { Fragment } from 'react';

import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const TEST_POSTS = [
  {
    slug: 'this-is-a-test',
    title: 'Test Title',
    image: 'test-image.png',
    excerpt: 'This is a test of a test of a test blog.',
    date: '2022-06-28',
  },
  {
    slug: 'this-is-a-test2',
    title: 'Test Title',
    image: 'test-image.png',
    excerpt: 'This is a test of a test of a test blog.',
    date: '2022-06-28',
  },
  {
    slug: 'this-is-a-test3',
    title: 'Test Title',
    image: 'test-image.png',
    excerpt: 'This is a test of a test of a test blog.',
    date: '2022-06-28',
  },
  {
    slug: 'this-is-a-test4',
    title: 'Test Title',
    image: 'test-image.png',
    excerpt: 'This is a test of a test of a test blog.',
    date: '2022-06-28',
  },
  {
    slug: 'this-is-a-test5',
    title: 'Test Title',
    image: 'test-image.png',
    excerpt: 'This is a test of a test of a test blog.',
    date: '2022-06-28',
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={TEST_POSTS} />
    </Fragment>
  );
};

export default HomePage;
