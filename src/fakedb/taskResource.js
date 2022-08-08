import RESOURCES from "./resources";
import TASKS from "./tasks";

const resourcesByTaskOutput = (taskKey) => {
  let filteredTasks = {};
  const task = TASKS[taskKey];
  Object.keys(task.output).forEach((key) => {
    filteredTasks[key] = RESOURCES[key] || {
      display_name: `MISSING key "${key}"`,
    };
  });
  return filteredTasks;
};

const taskByResourcesInput = (resourceKey) => {
  let filteredTasks = {};

  Object.keys(TASKS).forEach((taskKey) => {
    if (TASKS[taskKey].input[resourceKey])
      filteredTasks[taskKey] = TASKS[taskKey] || {
        display_name: `MISSING key "${resourceKey}"`,
      };
  });
  return filteredTasks;
};

const taskByResourcesOutput = (resourceKey) => {
  let filteredTasks = {};

  Object.keys(TASKS).forEach((taskKey) => {
    if (TASKS[taskKey].output[resourceKey])
      filteredTasks[taskKey] = TASKS[taskKey] || {
        display_name: `MISSING key "${resourceKey}"`,
      };
  });
  return filteredTasks;
};
export { resourcesByTaskOutput, taskByResourcesInput, taskByResourcesOutput };
