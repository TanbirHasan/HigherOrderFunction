const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

// another example

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score);
