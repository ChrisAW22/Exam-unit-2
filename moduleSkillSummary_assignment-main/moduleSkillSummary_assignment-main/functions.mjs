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

// Tests for square function
testFunction.isEqual(square(4), 16, "Square of 4 should be 16");
testFunction.isEqual(square(-3), 9, "Square of -3 should be 9");
testFunction.isEqual(square(0), 0, "Square of 0 should be 0");

// Tests for millimeter function
testFunction.isEqual(millimeter(100), 2540, "100 inches should convert to 2540 millimeters");
testFunction.isEqual(millimeter(0), 0, "0 inches should convert to 0 millimeters");
testFunction.isEqual(millimeter(-5), -127, "-5 inches should convert to -127 millimeters");

// Tests for root function
testFunction.isEqual(root(16), 4, "Square root of 16 should be 4");
testFunction.isEqual(root(0), 0, "Square root of 0 should be 0");
testFunction.isEqual(root(25), 5, "Square root of 25 should be 5");
testFunction.isNotANumber(root(-1), "Square root of -1 should return NaN");

// Tests for cube function
testFunction.isEqual(cube(3), 27, "Cube of 3 should be 27");
testFunction.isEqual(cube(-2), -8, "Cube of -2 should be -8");
testFunction.isEqual(cube(0), 0, "Cube of 0 should be 0");

// Tests for area function
testFunction.isEqual(area(6), Math.PI * 36, "Area of a circle with radius 6 should be 36π");
testFunction.isEqual(area(0), 0, "Area of a circle with radius 0 should be 0");
testFunction.isEqual(area(1), Math.PI, "Area of a circle with radius 1 should be π");

// Tests for greeting function
testFunction.isEqual(greeting("Charlie"), "Hello Charlie", `Greeting "Charlie" should return "Hello Charlie"`);
testFunction.isEqual(greeting("Alex"), "Hello Alex", `Greeting "Alex" should return "Hello Alex"`);
testFunction.isEqual(greeting(""), "Hello ", `Greeting "" should return "Hello "`);