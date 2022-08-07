import * as React from "react";
import Link from 'gatsby-link';

const IndexPage = () => {
  return (
    <main className={styles.pageStyles}>
      <h1>
        Million On Mars
        <br />
        <span>— Just to simplify search</span>
      </h1>
      <p>Lets see how far I get on this app</p>
      <ul>
        <li>
          <Link to="/buildings">Building List</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks List</Link>
        </li>
        <li>
          <Link to="/resources">Resources List</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
