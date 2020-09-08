import React from 'react'
import Link from '@docusaurus/Link';
import styles from './HomepageReleases.module.css'
import {releases} from '../../homepage.config'

function HomepageReleases() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.bannerTitle}>{releases.title}</h2>
      {releases.items && (
        <ul className={styles.bannerList}>
          {releases.items.map((item, index) => (
            <li key={index}><Link href={item.url}>{item.label}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HomepageReleases