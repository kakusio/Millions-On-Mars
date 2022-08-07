import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import RESOURCES from "../../fakedb/resources";
import TASKRESOURCE from "../../fakedb/taskResource";

const Resources = (props) => {
  const {
    location: { href },
  } = props;
  const url = new URL(href);
  const task = url.searchParams.get("task");
  let resources = RESOURCES;

  if (task) {
    resources = TASKRESOURCE.filter((tr) => {
      return tr.Task.Name === task;
    }).map((bt) => bt.Resource);
  }

  return <PageWrapper Title="Resources" Items={resources} />;
};

export default Resources;

export const Head = () => <title>Resources Page</title>;
