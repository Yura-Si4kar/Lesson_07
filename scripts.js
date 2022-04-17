function createCalculator(base) {
  return {
    sum: (b) => (base += b),
    mult: (b) => (base *= b),
    sub: (b) => (base -= b),
    div: (b) => (base /= b),
    set: (b) => (base = b),
    get: () => base,
  }
};

const calc = createCalculator(10);

console.log (calc.sum(5));
console.log (calc.mult(10));
console.log (calc.sub(40));
console.log(calc.div(10));
calc.set(100);

console.log(calc.get());
