import Image from 'next/Image';

import classes from './logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image
        src='/images/site/Noun_Glasses.png'
        alt='Noun glasses'
        width={300}
        height={300}
      />
    </div>
  );
};

export default Logo;
