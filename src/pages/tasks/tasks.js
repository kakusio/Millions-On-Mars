import * as React from "react";
import { Link } from "gatsby";

import PageWrapper from "../../component/pageWrapper";
import TASKS from "../../fakedb/tasks";
import BUILDINGS from "../../fakedb/buildings";
import RESOURCES from "../../fakedb/resources";
import {
  taskByResourcesInput,
  taskByResourcesOutput,
} from "../../fakedb/taskResource";

const Tasks = () => {
  let filteredTasks = {};
  let building = "";
  let resourceInput = "";
  let resourceOutput = "";
  let subTitle = "";

  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    building = url.searchParams.get("building");
    resourceInput = url.searchParams.get("resourceInput");
    resourceOutput = url.searchParams.get("resourceOutput");
    if (building) {
      Object.keys(TASKS)
        .filter(
          (key) =>
            TASKS[key].building.display_name ===
            BUILDINGS[building]?.display_name
        )
        .map((key) => (filteredTasks[key] = TASKS[key]));
      subTitle = `Building: ${BUILDINGS[building]?.display_name}`;
    } else if (resourceInput) {
      filteredTasks = taskByResourcesInput(resourceInput);
      subTitle = `Input Resource: ${RESOURCES[resourceInput]?.display_name}`;
    } else if (resourceOutput) {
      filteredTasks = taskByResourcesOutput(resourceOutput);
      subTitle = `Output Resource: ${RESOURCES[resourceOutput]?.display_name}`;
    }
  }
  const tasks = Object.keys(filteredTasks).length > 0 ? filteredTasks : TASKS;
  return (
    <PageWrapper
      title="Tasks"
      subTitle={subTitle}
      items={tasks}
      getDescription={({ key, items }) => (
        <>
          <Link to={`/tasks?building=${items[key].building.key}`}>
            Tasks By {items[key].building.display_name}
          </Link>
          <span> || </span>
          <Link to={`/resources?task=${key}`}>Resources Output</Link>
        </>
      )}
    />
  );
};

export default Tasks;

export const Head = () => <title>Tasks Page</title>;
