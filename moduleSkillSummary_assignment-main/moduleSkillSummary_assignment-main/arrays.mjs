import test from "./tests.mjs";
import { arrays } from "./data.mjs";

function flatArray (array, result = []) {
    if (!Array.isArray(array)) {
        return [];
    }
    for (const i of array) {
        if (Array.isArray(i)) {
            flatArray(i, result)
        } else {
            result.push(i);
            }
    }
    return result;
}

console.log(flatArray(arrays, []));

const testArray = test ("Array");

// Valid cases
testArray.isEqual(flatArray([1, 2, 3]), [1, 2, 3], "Flat array of [1, 2, 3] should return [1, 2, 3]");
testArray.isEqual(flatArray([1, [2, 3], 4]), [1, 2, 3, 4], "Flat array of [1, [2, 3], 4] should return [1, 2, 3, 4]");
testArray.isEqual(flatArray([[1, 2], [3, [4, 5]]]), [1, 2, 3, 4, 5], "Flat array of [[1, 2], [3, [4, 5]]] should return [1, 2, 3, 4, 5]");

// Edge cases
testArray.isEqual(flatArray([]), [], "Flat array of [] should return []");
testArray.isEqual(flatArray([[[[[1]]]]]), [1], "Flat array of deeply nested [[[1]]] should return [1]");
testArray.isEqual(flatArray([null, [undefined, NaN]]), [null, undefined, NaN], "Flat array of [null, [undefined, NaN]] should return [null, undefined, NaN]");
testArray.isEqual(flatArray([[], [], []]), [], "Flat array of multiple empty arrays should return []");

// Incorrect inputs
testArray.isEqual(flatArray(123), [], "Flat array of a non-array (123) should return an empty array");
testArray.isEqual(flatArray("string"), [], "Flat array of a non-array ('string') should return an empty array");
testArray.isEqual(flatArray({ key: "value" }), [], "Flat array of an object should return an empty array");
