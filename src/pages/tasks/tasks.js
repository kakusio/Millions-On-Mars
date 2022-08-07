import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import TASKS from "../../fakedb/tasks";
import BUILDINGS from "../../fakedb/buildings";

const Tasks = () => {
  let filteredTasks = {};
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    const building = url.searchParams.get("building");
    if (building) {
      Object.keys(TASKS)
        .filter(
          (key) =>
            TASKS[key].building.display_name ===
            BUILDINGS[building]?.display_name
        )
        .map((key) => (filteredTasks[key] = TASKS[key]));
    }
  }
  const tasks = Object.keys(filteredTasks).length > 0 ? filteredTasks : TASKS;
  return (
    <PageWrapper Title="Tasks" Items={tasks} TargetLink={"/resources?task="} />
  );
};

export default Tasks;

export const Head = () => <title>Tasks Page</title>;
