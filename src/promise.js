// В какой последовательности отобразятся логи?

setTimeout(() => console.log(('First timer')), 0);

const promise = new Promise((resolve) => {
  console.log('First executor');
  resolve('First resolved');
});

console.log('First');

promise.then((message) => console.log(message)); // 'First resolved'

const fn = async () => {
  console.log('Start fn');

  await Promise.resolve();

  console.log('End fn');
};

fn();

console.log('End');

// First executor
// First
// Start fn
// End
// First resolved
// End fn
// First timer
