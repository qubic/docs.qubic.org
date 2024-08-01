import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  //Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: URL;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn about Qubic',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dive into the world of Qubic, a revolutionary crypto platform that's reshaping the digital landscape. 
        With its unique quorum-based computation (QBC) system, Useful Proof-of-Work, and feeless transfers, 
        Qubic sets a new standard for reliability, efficiency, and user-friendliness. 
        Explore how Qubic combines the best aspects of existing platforms and eradicates their limitations."
      </>
    ),
    link: '/learn/basics/overview',
  },
  {
    title: 'Become a Computor',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Take part in the future of blockchain technology. By becoming a Computor in the Qubic network, 
        you're not just a participant, but a pillar of our innovative consensus protocol. 
        Maintain high computational standards, execute smart contracts and contribute to the 
        decentralization and security of the Qubic platform. 
        Discover how you can leverage your computing prowess for rewards and play a pivotal role in the Qubic ecosystem.
      </>
    ),
    link: '/computors/prerequisites',
  },
  {
    title: 'Become an Investor',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Seize the opportunity to invest in one of the most promising crypto platforms on the horizon. 
        Qubic's unique approach to consensus, mining, and smart contract execution not only sets it apart 
        but also ensures a scalable and robust platform. By investing in Qubic, you're not just backing a 
        cryptocurrency; you're fuelling an advanced, sustainable, and game-changing technology. 
        Learn more about the potential of Qubic and embark on an exciting investment journey.
      </>
    ),
    link: '/learn/user guide/invest',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (

    <div className={clsx('col col--4')}>
      {/*
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      */}
          <Link
            className={styles.featureLink}
            to={link}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
