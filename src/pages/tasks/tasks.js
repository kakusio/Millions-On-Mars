import * as React from "react";

import PageWrapper from "../../component/pageWrapper";
import TASKS from "../../fakedb/tasks";
import BUILDINGTASK from "../../fakedb/buildingTask";

const Tasks = (props) => {
  const {
    location: { href },
  } = props;
  const url = new URL(href);
  const building = url.searchParams.get("building");
  let tasks = TASKS;

  if (building) {
    tasks = BUILDINGTASK.filter((bt) => bt.Building.Name === building).map(
      (bt) => bt.Task
    );
  }

  return (
    <PageWrapper Title="Tasks" Items={tasks} TargetLink={"/resources?task="} />
  );
};

export default Tasks;

export const Head = () => <title>Tasks Page</title>;
