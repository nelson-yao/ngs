const [first, ...restOfItems] = [10, 20, 30, 40];

const [first, second,, forth] = [10, 20, 30, 40];
console.log(forth);

const [newfirst, ...restOfItems] = [10, 20, 30, 40];
console.log(restOfItems);

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;
// console.log(person.firstName, person.lastName)

// copies defined this way are shallow copies
const newArray = [...restOfItems];
console.log(newArray)
const newObject = {
  ...person,
};
console.log(newObject)