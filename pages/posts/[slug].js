import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../helpers/posts-util';

const SinglePostPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.posts.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesNames = getPostFiles();
  const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SinglePostPage;
