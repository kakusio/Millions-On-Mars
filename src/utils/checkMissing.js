// SAVING CODE: in case is needed in the future
const checkMissing = (TASKS, RESOURCES) => {
  const missing = {};
  Object.keys(TASKS).map((taskKey) => {
    const task = TASKS[taskKey];
    Object.keys(task.input).map((key) => {
      if (!RESOURCES[key]) {
        const text = key
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        missing[key] = `${key}: {display_name: "${text}"},`;
      }
    });
  });

  console.log(Object.values(missing));
};

return checkMissing;
