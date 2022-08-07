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
export { resourcesByTaskOutput };
