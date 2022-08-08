import * as React from "react";
import { Link } from "gatsby";

import PageWrapper from "../../component/pageWrapper";
import BUILDINGS from "../../fakedb/buildings";

const IndexPage = () => {
  return (
    <PageWrapper
      title="Buildings"
      items={BUILDINGS}
      getDescription={({ key }) => (
        <Link to={`/tasks?building=${key}`}>Tasks By Building</Link>
      )}
    />
  );
};

export default IndexPage;

export const Head = () => <title>Buildings Page</title>;
