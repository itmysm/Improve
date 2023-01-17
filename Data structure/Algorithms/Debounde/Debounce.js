const debounce = (callback, wait) => {
  let timeoutId = null;
  console.log('First sec');

  return (...args) => {
    console.log('sec sec');
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}


for (let index = 0; index < 10; index++) {
  debounce(function() { 
    console.log('3rd');
  }, 250)
}