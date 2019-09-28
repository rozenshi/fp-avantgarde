/**
 * Create a new function based on another one that prints: 
 * 'Function <name> was called with <args>'
 * every time is called
 */
const spy = fn => (...args) => {
  console.log(`Function ${fn.name} was called with ${args}`);
  return fn(...args);
};

/**
 * Create a new function based on another one that prints: 
 * "Function is going to be executed" & "Function executed"
 * before and after execution respectively
 */
const spy2 = fn => (...args) => {
  console.log("Function is going to be executed");
  const result = fn(...args);
  console.log("Function executed");
  return result;
};