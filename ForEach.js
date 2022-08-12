const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));

// another example

let sum = 0;
const nums = [1, 2, 3, 4, 5];
nums.forEach((num) => (sum += num));

console.log(sum);
