import debounce from "./debounce";

jest.useFakeTimers(); //Jest replaces the real timer functions with mock versions that you can control.

test('debounce should delay the function call', () => {
  const func = jest.fn();  // mock test function: jest.fn()
  const wait = 200;
  const debouncedFunc = debounce(func, wait);

  // Call the debounced function multiple times
  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  // This function advances the mock timers by a specified amount of time (in milliseconds). When using fake timers, the code that relies on timers won’t automatically progress. Instead, you need to manually advance the timers to simulate the passage of time.
  jest.advanceTimersByTime(wait);

  // Expect the function to have been called once
  expect(func).toHaveBeenCalledTimes(1);
});

test('debounce should not call the function immediately', () => {
  const func = jest.fn();
  const wait = 200;
  const debouncedFunc = debounce(func, wait);

  // Call the debounced function
  debouncedFunc();

  // The function should not be called immediately
  expect(func).not.toHaveBeenCalled();

  // Fast-forward time
  jest.advanceTimersByTime(wait);

  // Now the function should have been called
  expect(func).toHaveBeenCalled();
  expect(func).toHaveBeenCalledTimes(1);
});