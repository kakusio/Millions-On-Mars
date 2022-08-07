import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import RESOURCES from "../../fakedb/resources";
import { resourcesByTaskOutput } from "../../fakedb/taskResource";

const Resources = () => {
  let resources = RESOURCES;
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const task = url.searchParams.get("task");
    if (task) {
      resources = resourcesByTaskOutput(task);
    }
  }
  return <PageWrapper Title="Resources" Items={resources} />;
};

export default Resources;

export const Head = () => <title>Resources Page</title>;
