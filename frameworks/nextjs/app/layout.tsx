import React from "react";
import Link from "next/link";

import "@fontsource/inter";
import "../../styles/global.css";

import Logo from "../assets/logo.svg";
import Framework from "../assets/framework.svg";
// import * as styles from "../../styles/layout.module.css";

const styles: any = {}

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" passHref className={styles.homeLink}>

          <Logo alt="Pet Snuggles" className={styles.homeLink} />
          <h1 className={styles.navTitle}>
            Pet
            <br />
            Snuggles
          </h1>

        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" passHref className={styles.navLink}>
            Pets
          </Link>
          <Link href="/blog/" passHref className={styles.navLink}>
            
              Blog
            
          </Link>
          <Link href="/store/" passHref className={styles.navLink}>
            
              Swag
            
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