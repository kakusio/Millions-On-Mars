import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import BUILDINGS from "../../fakedb/buildings";

const IndexPage = () => {
  return (
    <PageWrapper
      Title="Buildings"
      Items={BUILDINGS}
      TargetLink={"/tasks?building="}
    />
  );
};

export default IndexPage;

export const Head = () => <title>Buildings Page</title>;
