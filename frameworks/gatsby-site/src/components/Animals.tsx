import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { gql, useMutation, useSubscription } from "@apollo/client";
import clsx from 'clsx';

import { Info } from "./Info";
import * as styles from "../../../animals.module.css"

// import { createAndRedirectStripeSession } from "./utils";

const DetailLink = ({ children, to }) => (
  <Link to={to} className={styles.viewDetailsLink}>
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
  </Link>
);

const DOG_SUB = gql`
  subscription ($id: ID!) {
    contentfulDogsChanged(id: $id) {
      id
      name
      about {
        about
      }
      image {
        url
      }
    }
  }
`;

export function AnimalDisplay({ animal, type, disableDetails = false }) {
  const [animalState, setAnimalState] = useState(animal);
  const [name, setName] = useState(animal?.name);

  return (
    <div className={clsx(styles.card, !disableDetails && styles.cardDetails)}>
      <div className={styles.imageWrapper}>
        {animalState?.image?.gatsbyImageData ? (
          <GatsbyImage
            image={animalState?.image?.gatsbyImageData}
            alt={animalState?.name}
            style={{
              borderRadius: "var(--radius-5)",
              height: disableDetails ? 400 : 200,
              width: disableDetails ? 400 : 200,
            }}
          />
        ) : (
          animalState?.image?.url && (
            <img
              src={animalState?.image?.url}
              alt={animalState?.name}
              className={styles.animalImage}
              style={{
                height: disableDetails ? 400 : 200,
                width: disableDetails ? 400 : 200,
              }}
            />
          )
        )}
      </div>
      <div>
        {disableDetails ? (
          <h1 className={styles.pageTitle}>{animalState?.name || `Good Boy`}</h1>
        ) : (
          <DetailLink to={`/${type}/${animalState?.id}/`}>
            {animalState?.name || `Good Boy`}
          </DetailLink>
        )}
        {type && <span className={styles.animalType}>{type}</span>}
        {disableDetails && animalState?.about?.about && (
          <div className={styles.description}>{animalState?.about?.about}</div>
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

export function Animals({ data, ssg }) {
  return (
    <>
      <Info cms="Contentful" renderer={ssg ? "ssg" : "ssr"} />
      <section className={styles.animalList}>
        {data?.map((animal, i) => {
          return <Animal key={`${animal.name}${i}`} animal={animal} />;
        })}
      </section>
    </>
  );
}
