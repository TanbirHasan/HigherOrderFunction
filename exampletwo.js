// returning a function, use of clousure

function checkingcallback(num1, num2) {
  var sum = num1 + num2;
  return function callingsum() {
    console.log(sum);
  };
}

var result = checkingcallback(2, 4);
result();

// another example , higher order function, curriyng

const HigherOrder = (t) => {
  const Dosomething = (h) => {
    const Dowhatever = (m) => {
      return t + h + m;
    };
    return Dowhatever;
  };
  return Dosomething;
};

console.log(HigherOrder("T")("H")("M"));
