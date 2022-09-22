import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Layout } from "../components/Layout";

const Main = styled.main``;

const Heading = styled.h1`
  margin: var(--size-7) 0 var(--size-3);
  font-size: var(--font-size-4);
  line-height: var(--lineheight-00);
`;

const P = styled.p`
  margin-bottom: var(--size-6);
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Main>
        <title>404 not found</title>
        <Heading>
          404
          <br />
          page not found
        </Heading>
        <P>
          We're sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>
          , but we couldn’t find what you were looking for.
          <br />
          <Link to="/">Go home</Link>.
        </P>
      </Main>
    </Layout>
  );
};

export default NotFoundPage;
