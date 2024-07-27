import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Particles from 'react-particles';
import styles from './index.module.css';
import React from 'react';
import MythicalComponent from '../components/MythicalComponent';


function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <Heading as='h1' className='hero__title'>
                    {siteConfig.title}
                </Heading>
                <p className='hero__subtitle'>
                    Welcome to the enchanting realm where magic begins! Since our inception in 2021, we have garnered
                    the trust of over 12 million users and continue to captivate their imaginations.
                </p>
                <div className={styles.buttons}>
                    <Link className='button button--secondary button--lg' to='/docs'>
                      Documentation
                    </Link><br></br>&nbsp;
                    <Link className='button button--secondary button--lg' to='https://discord.mythicalsystems.xyz'>Discord</Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
      <Layout title={``} description='Welcome to the enchanting realm where magic begins! Since our inception in 2021, we have garnered the trust of over 12 million users and continue to captivate their imaginations.'>
        <HomepageHeader />
        <main>
            <MythicalComponent />
        </main>
      </Layout>
    );
}

