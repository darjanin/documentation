import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import classnames from 'classnames'
import styles from './HomepageCard.module.css'

function HomepageCard({imageUrl, title, description,pageUrl,subheadings}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.feature}>
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title}  />
      )}
      <Link to={useBaseUrl(`/docs/${pageUrl}`)} className={styles.titleLink}><h3 className={styles.title}>{title}</h3></Link>
      <div className={styles.links}>
        <Link href={subheadings.subheading_1_url} className={styles.listLink}> {subheadings.subheading_1} </Link>
        <Link href={subheadings.subheading_2_url} className={styles.listLink}> {subheadings.subheading_2} </Link>
        <Link href={subheadings.subheading_3_url} className={styles.listLink}> {subheadings.subheading_3} </Link>
        <span className={classnames(styles.listLink, styles.listLinkLearnMore)}> learn more </span>
      </div>
    </div>
  );
}

export default HomepageCard