import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import HomepageCard from '../components/HomepageCard'
import HomepageContact from '../components/HomepageContact'
import HomepageReleases from '../components/HomepageReleases';
import HomepageHero from '../components/HomepageHero';
import {features} from '../../homepage.config'
import Search from '../theme/SearchBar';

function Features({data}) {
  if (data.length == 0) return null

  return (
    <section className="container">
      <div className="row">
        {data.map((props, index) => (
          <div className={classnames('col col--4')} key={index}>
            <HomepageCard {...props} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Homepage() {

  return (
    <Layout description="Qredo Customer Center">
      <div className={styles.landingPageBackground}>
        <HomepageHero />
        <Search
          customId="homepage_search"
          isHomepage
          handleSearchBarToggle={() => false}
          isSearchBarExpanded
        />
        <main>
          <Features data={features} />
          <HomepageReleases />
          <HomepageContact />
        </main>
      </div>
    </Layout>
  );
}

export default Homepage;
