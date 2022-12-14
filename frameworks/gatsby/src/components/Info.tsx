import React from 'react'

import * as styles from '../../../styles/info.module.css'
import contentful from '../assets/contentful.svg'
import wordpress from '../assets/wordpress.svg'
import shopify from '../assets/shopify.svg'
import ssr from '../assets/ssr.svg'
import ssg from '../assets/ssg.svg'

export const cmsIcons = {
  Contentful: contentful,
  WordPress: wordpress,
  Shopify: shopify,
}

export const rendererIcons = {
  ssg: ssg,
  ssr: ssr,
}

export function Info({ cms, renderer }) {
  return (
    <p className={styles.container}>
      <span className={styles.logos}>
        <img src={cmsIcons[cms]} alt={`${cms} logo`} className={styles.logo} />
        {renderer && (
          <>
            +{' '}
            <img src={rendererIcons[renderer]} alt="" className={styles.logo} />
          </>
        )}
      </span>{' '}
      <span>
        Rendered <b>{renderer === 'ssg' ? 'at build time' : 'server-side'}</b>{' '}
        using data from <b>{cms}</b>.
      </span>
    </p>
  )
}
