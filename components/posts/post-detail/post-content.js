import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

const TEST__POST = {
  slug: 'this-is-a-test',
  title: 'Test Title',
  image: 'test-image.png',
  date: '2022-06-28',
  content: '# First Blog Post',
};

const PostContent = () => {
  const imagePath = `/images/posts/${TEST__POST.slug}/${TEST__POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={TEST__POST.title} image={imagePath} />
      <ReactMarkdown>{TEST__POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
