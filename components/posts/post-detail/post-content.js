import PostHeader from './post-header';

const TEST__POST = {
  slug: 'this-is-a-test',
  title: 'Test Title',
  image: 'test-image.png',
  date: '2022-06-28',
  conent: ''
};

const PostContent = () => {
  return (
    <article>
      <PostHeader title='' image='' />
      CONTENT
    </article>
  );
};

export default PostContent;
