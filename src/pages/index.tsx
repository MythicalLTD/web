import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import NewPage from '../components/NewPage';

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
      <Layout title={``} description='Welcome to the enchanting realm where magic begins! Since our inception in 2021, we have garnered the trust of over 12 million users and continue to captivate their imaginations.'>
        <main>
            <NewPage />
        </main>
      </Layout>
    );
}

