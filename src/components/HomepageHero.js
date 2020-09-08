import React from 'react'
import styles from './HomepageHero.module.css'
import {hero} from '../../homepage.config'

function HomepageHero() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>{hero.title}</h1>
        <p className={styles.heroSubtitle}>{hero.subtitle}</p>
      </div>
    </header>
  )
}

export default HomepageHero