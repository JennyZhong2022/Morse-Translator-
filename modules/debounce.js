// 	If you press the button and then keep pressing it repeatedly, the elevator won’t start moving until you stop pressing the button for a while.
// The debounce function is similar: it only calls the function after a period of time has passed without the event being triggered again. so wait a little bit ,then func get trigged. 

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

export default debounce