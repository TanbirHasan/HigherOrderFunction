function HigherOrder(arr) {
  let num = 5;
  let result = arr.map((e) => num * e);
  return result;
}

let array = [4, 3, 6, 2, 6, 2, 2, 4];
console.log(HigherOrder(array));

// uppercase name

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);
