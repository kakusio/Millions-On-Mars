import * as React from "react";
import { Link } from "gatsby";

import PageWrapper from "../../component/pageWrapper";
import RESOURCES from "../../fakedb/resources";
import TASKS from "../../fakedb/tasks";
import { resourcesByTaskOutput } from "../../fakedb/taskResource";

const Resources = () => {
  let resources = RESOURCES;
  let task = "";
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    task = url.searchParams.get("task");
    if (task) {
      resources = resourcesByTaskOutput(task);
    }
  }
  return (
    <PageWrapper
      title="Resources"
      subTitle={
        TASKS[task] &&
        `${TASKS[task]?.building?.display_name}: ${TASKS[task]?.display_name}`
      }
      items={resources}
      getDescription={({ key }) => (
        <>
          <Link to={`/tasks?resourceInput=${key}`}>Input On Tasks</Link>
          <span> || </span>
          <Link to={`/tasks?resourceOutput=${key}`}>Output On Tasks</Link>
        </>
      )}
    />
  );
};

export default Resources;

export const Head = () => <title>Resources Page</title>;
