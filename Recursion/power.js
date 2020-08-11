const power = (base, exponent) =>
  exponent === 0 ? 1 : base * power(base, exponent - 1);

console.log(power(2, 0)); // 1
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
