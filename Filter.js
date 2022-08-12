const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

//Filter countries containing land
const countriesContainingLand = countries.filter(
  //    country.includes('land')
  (country) => country != "Ireland"
);
console.log(countriesContainingLand);

// another method

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

// another example

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);
