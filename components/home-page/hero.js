import Image from 'next/image'

import classes from './hero.module.css';


const Hero = () => {
  return (
    <section className={classes.hero}>

<div className={classes.image}>
  <Image src="/images/site/foxy_noun.png" alt="An image showing a Noun NFT." width={300} height={300} />
</div>
<h1>Hi, I'm a Noun.</h1>
<p>I blog about the comings and goings of the Nouns DAO. Oh!.. and value creation with on-chain communities too.</p>
    </section>
  )
};

export default Hero;
