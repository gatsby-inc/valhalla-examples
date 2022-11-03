import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/logo.svg'
import framework from '../assets/framework.svg'
import * as styles from '../../../styles/layout.module.css'

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>
          <img src={logo} alt="Pet Snuggles" className={styles.homeLink} />
          <h1 className={styles.navTitle}>
            Pet
            <br />
            Snuggles
          </h1>
        </Link>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Pets
          </Link>
          <Link to="/blog/" className={styles.navLink}>
            Blog
          </Link>
          <Link to="/store/" className={styles.navLink}>
            Swag
          </Link>
        </nav>
        <div className={styles.poweredBy}>
          <span>
            Powered by{' '}
            <a
              href="https://gatsby.dev/valhalla"
              target="_blank"
              rel="noreferrer"
              className={styles.poweredByLink}
            >
              Valhalla
            </a>{' '}
            and <b style={{ fontWeight: 'var(--font-weight-6)' }}>Gatsby</b>
          </span>{' '}
          <img src={framework} alt="Gatsby" />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
