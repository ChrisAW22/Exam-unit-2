import test from "./tests.mjs";

function square(x) {
    return x * x;
}

function millimeter(x) {
    return x * 25.4;
}

function root(x) {
    return Math.sqrt(x);
}

function cube(x) {
    return x * x * x;
}

function area(x) {
    return Math.PI * (x * x);
}

function greeting(name) {
    return ("Hello " + name);
}

console.log(square(4));
console.log(millimeter(100));
console.log(root(16));
console.log(cube(3));
console.log(area(6));
console.log(greeting("Charlie"));

const testFunction = test ("Function");