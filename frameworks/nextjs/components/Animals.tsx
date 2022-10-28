import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "../../styles/animals.module.css"

const DetailLink = ({ children, href }) => (
  (<Link passHref href={href} className={styles.viewDetailsLink} legacyBehavior>

    <h2 className={styles.animalName}>
      {children}
      <span className={styles.viewDetailsIcon}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </h2>

  </Link>)
);

export function AnimalDisplay({ animal, type, disableDetails = false }) {
  return (
    <div className={clsx(styles.card, !disableDetails && styles.cardDetails)}>
      <div className={styles.imageWrapper}>
        {animal?.image?.gatsbyImageData ? (
          <GatsbyImage
            image={animal?.image?.gatsbyImageData}
            alt={animal?.name}
            style={{
              borderRadius: "var(--radius-5)",
              height: disableDetails ? 400 : 200,
              width: disableDetails ? 400 : 200,
            }}
          />
        ) : (
          <Image
            src={animal?.image?.url}
            alt={animal?.name}
            height={disableDetails ? 400 : 200}
            width={disableDetails ? 400 : 200}
            layout="fixed"
          />
        )}
      </div>
      <div>
        {disableDetails ? (
          <h1 className={styles.pageTitle}>{animal?.name || `Good Boy`}</h1>
          ) : (
          <DetailLink href={`/${type}/${animal?.id}/`}>
            {animal?.name || `Good Boy`}
          </DetailLink>
        )}
        {type && <span className={styles.animalType}>{type}</span>}
        {disableDetails && animal?.about?.about && (
          <div className={styles.description}>{animal?.about?.about}</div>
        )}
      </div>
    </div>
  );
}

export function Animal({ animal }) {
  return (
    <AnimalDisplay key={animal?.id} animal={animal} type={animal.animalType} />
  );
}

export function Animals({ data }) {
  return (
    <section className={styles.animalList}>
      {data?.map((animal, i) => {
        return <Animal key={`${animal.name}${i}`} animal={animal} />;
      })}
    </section>
  );
}
