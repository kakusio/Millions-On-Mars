import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import RESOURCES from "../../fakedb/resources";
import TASKRESOURCE from "../../fakedb/taskResource";

const Resources = () => {
  let resources = RESOURCES;
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const task = url.searchParams.get("task");
    if (task) {
      resources = TASKRESOURCE.filter((tr) => {
        return tr.Task.Name === task;
      }).map((bt) => bt.Resource);
    }
  }

  return <PageWrapper Title="Resources" Items={resources} />;
};

export default Resources;

export const Head = () => <title>Resources Page</title>;
