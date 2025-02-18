import { arrays } from "./data.mjs";

function flatArray (array, result = []) {
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