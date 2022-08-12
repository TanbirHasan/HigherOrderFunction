// Accepting another function as arguments

const multiple = (n) => {
  return n * n;
};

const acceptMulti = (callback, n) => {
  let result = callback(n) + n;

  return result;
};
console.log(acceptMulti(multiple, 3));

// another example

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});
