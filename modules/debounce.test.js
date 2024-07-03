import debounce from "./debounce";

jest.useFakeTimers();

test('debounce should delay the function call', () => {
  const func = jest.fn();
  const wait = 200;
  const debouncedFunc = debounce(func, wait);

  // Call the debounced function multiple times
  debouncedFunc();
  debouncedFunc();
  debouncedFunc();

  // Fast-forward time
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