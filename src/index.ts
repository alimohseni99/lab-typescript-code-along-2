const arr = [1, 2, 3, 4, 5];

const filledArrau = new Array(100).fill(null).map((_, i) => {
  return i;
});

const data = [1, 2, 3];

const lastElement = data[data.length - 1];

const indexOfValue2 = data.indexOf(2);

[{ name: "Ali" }]
  .map((person) => {
    return { ...person.name.toUpperCase };
  })
  .forEach((person) => {
    console.log(person);
  });
