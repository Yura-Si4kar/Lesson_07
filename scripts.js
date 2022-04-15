function createSum(a) {
  return function(b) {
    return a + b;
  };
};

function createMultiply(a) {
  return function (b) {
    return a * b;
  };
};

function createSabtract(a) {
  return function (b) {
    return b - a;
  };
};

function createDivade(a) {
  return function (b) {
    return b / a;
  };
};

const sum5 = createSum(5);
const mult10 = createMultiply(10);
const sub40 = createSabtract(40);
const div10 = createDivade(10);

console.log(`resultSum : ${sum5(10)}`);
console.log(`resultMultiply : ${mult10(15)}`);
console.log(`resultSubtract : ${sub40(150)}`);
console.log(`resultDivide : ${div10(110)}`);