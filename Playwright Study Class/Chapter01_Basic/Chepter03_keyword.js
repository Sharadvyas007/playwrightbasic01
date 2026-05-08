// JavaScript Keywords Reference
// This file covers all reserved keywords in JavaScript

// === 1. Variable Declarations ===
let name = "Sharad";       // block-scoped mutable variable
const age = 25;            // block-scoped immutable variable
var city = "Delhi";        // function-scoped variable (legacy)

// === 2. Functions & Async ===
function greet() {
    return "Hello!";
}

const sayHi = function() {
    console.log("Hi");
};

const arrowFunc = () => {
    console.log("Arrow function");
};

// async / await
async function fetchData() {
    const response = await Promise.resolve("data");
    return response;
}

// yield (inside generator functions)
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

// === 3. Conditional Statements ===
if (age > 18) {
    console.log("Adult");
} else if (age === 18) {
    console.log("Just turned 18");
} else {
    console.log("Minor");
}

// switch / case / default / break
switch (name) {
    case "Sharad":
        console.log("Welcome Sharad");
        break;
    case "Admin":
        console.log("Welcome Admin");
        break;
    default:
        console.log("Unknown user");
}

// === 4. Loops ===
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// do...while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 3);

// for...of (arrays, iterables)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in (object properties)
const person = { name: "Sharad", age: 25 };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// continue / break
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // skip 3
    if (i === 7) break;     // stop at 7
    console.log(i);
}

// === 5. Objects & Classes ===
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " makes a sound");
    }

    static info() {
        console.log("This is an animal");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(this.name + " barks");
    }
}

const dog = new Dog("Buddy");
dog.speak();
Dog.info();

// get / set (accessors)
class User {
    #password;  // private field (#)

    constructor(name) {
        this.name = name;
    }

    get displayName() {
        return this.name.toUpperCase();
    }

    set password(value) {
        this.#password = value;
    }
}

// === 6. Error Handling ===
try {
    JSON.parse("invalid json");
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Cleanup done");
}

throw new Error("Something went wrong");

// === 7. Operators & Checks ===
typeof "hello";        // "string"
typeof 42;             // "number"
typeof true;           // "boolean"
typeof {};             // "object"
typeof undefined;      // "undefined"
typeof function() {};  // "function"

[] instanceof Array;   // true
"key" in person;       // true

delete person.city;    // removes property

void 0;                // returns undefined

// === 8. Import / Export (Modules) ===
// export { greet };
// export default Animal;
// import { greet } from "./module.js";
// import Animal from "./Animal.js";
// import * as utils from "./utils.js";

// === 9. Null, Undefined, Boolean ===
let empty = null;
let notDefined;
let isActive = true;
let isDone = false;

// === 10. this ===
const obj = {
    value: 42,
    getValue() {
        return this.value;
    }
};

// === 11. new / instanceof ===
const arr = new Array(1, 2, 3);
console.log(arr instanceof Array);  // true

// === 12. return ===
function sum(a, b) {
    return a + b;
}

// === Full Keywords List ===
// Reserved words (cannot be used as identifiers):
// break, case, catch, class, const, continue, debugger,
// default, delete, do, else, export, extends, finally,
// for, function, if, import, in, instanceof, new, return,
// super, switch, this, throw, try, typeof, var, void,
// while, with, yield, enum

// Strict mode reserved words:
// implements, interface, let, package, private,
// protected, public, static

// Future reserved words:
// await, async, of
