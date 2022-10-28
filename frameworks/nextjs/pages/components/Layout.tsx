import React from "react";
import Link from "next/link";
import "@fontsource/inter";

import Logo from "../assets/logo.svg";
import Framework from "../assets/framework.svg";
import * as styles from "../../../styles/layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a className={styles.homeLink}>
            <Logo alt="Pet Snuggles" className={styles.homeLink} />
            <h1 className={styles.navTitle}>
              Pet
              <br />
              Snuggles
            </h1>
          </a>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" passHref>
            <a className={styles.navLink}>Pets</a>
          </Link>
          <Link href="/blog/" passHref>
            <a className={styles.navLink}>
              Blog
            </a>
          </Link>
          <Link href="/store/" passHref>
            <a className={styles.navLink}>
              Swag
            </a>
          </Link>
        </nav>
        <div className={styles.poweredBy}>
          <span>
            Powered by{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.poweredByLink}
            >
              Valhalla
            </a>{" "}
            and <b style={{ fontWeight: "var(--font-weight-6)" }}>Next.js</b>
          </span>
          <Framework alt="Gatsby" />
        </div>
      </header>
      <div>{children}</div>
    </div>
  );
}
