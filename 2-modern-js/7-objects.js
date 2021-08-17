const mystery = 'answer'
const PI = math.PI
const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
// javascript will evaluate whatever is in the square brackets
// the result will be the new property name
// here the result is answer
// so the new property-value is answer : 42
  [mystery] : 42,
  PI, // equivalent to PI: PI
};
