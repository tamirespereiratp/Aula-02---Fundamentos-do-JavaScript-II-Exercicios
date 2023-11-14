/* Exercise 01 - Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.*/
function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }

/* Exercise 02 - Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.*/
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

/* Exercise 03 - Sort in decreasing order
let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/
let numb = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( numb );

/* Exercise 04 - We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)*/
function copySorted(number) {
    return arr.slice().sort();
  }
  
  let number = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(number);
  
  alert( sorted );
  alert( number );

/* Exercise 05 - Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
Open a sandbox with tests.*/
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
// Exercise 06 - You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary

/* Exercise 07 - You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.*/
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let user = [ john, pete, mary ];

let userMapped = user.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

alert( userMapped[0].id ) // 1
alert( userMapped[0].fullName ) // John Smith

// Exercise 08 - Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
function sortByAge(arr2) {
    arr2.sort((a, b) => a.age - b.age);
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 28 };
  
  let arr2 = [ pete, john, mary ];
  
  sortByAge(arr2);
  
  // now sorted is: [john, mary, pete]
  alert(arr2[0].name); // John
  alert(arr2[1].name); // Mary
  alert(arr2[2].name); // Pete

/* Exercise 09 - Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.*/
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr3 = [1, 2, 3];
  shuffle(arr3);
  alert(arr3);

/* Exercise 10 - Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age. The formula for the average is (age1 + age2 + ... + ageN) / N.*/
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let john4 = { name: "John", age: 25 };
  let pete4 = { name: "Pete", age: 30 };
  let mary4 = { name: "Mary", age: 29 };
  
  let arr4 = [ john, pete, mary ];
  
  alert( getAverageAge(arr4) ); // 28

/* Exercise 11 - Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.*/
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

/* Exercise 12 - Let’s say we received an array of users in the form {id:..., name:..., age:... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.*/
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }