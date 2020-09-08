import React from 'react'
import styles from './HomepageContact.module.css'
import {contact} from '../../homepage.config'

function HomepageContact() {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>{contact.title}</h2>

        <p className={styles.contactFaq}></p>

        <a href={`mailto:${contact.email}`} className={styles.contactEmail}>{contact.email}</a>
      </div>
    </div>
  )
}

export default HomepageContact