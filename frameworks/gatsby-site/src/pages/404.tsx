import * as React from "react";
import { Link } from "gatsby";

import { Layout } from "../components/Layout";
import { pageTitle } from "../../../common.module.css"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className={pageTitle}>
        404 page not found :(
      </h1>
      <p>
        We're sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
        , but we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go to the homepage</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;


export function Head() {
  return (
    <title>404 not found / Pet Snuggles (Gatsby)</title>
  )
}