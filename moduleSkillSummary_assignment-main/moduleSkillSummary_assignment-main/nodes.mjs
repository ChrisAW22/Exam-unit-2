import test from "./tests.mjs";
import { nodes } from "./data.mjs";
function max(a, b) {
    return a > b ? a : b;
}

function allResults(tree, level, result) {
    if (tree === null || typeof tree !== "object") {
        return result;
    }
    if (Object.keys(tree).length === 0) {
        return result;
    }
    if (tree.left) {
        result = allResults(tree.left, level + 1, result);
    }
    if (tree.right) {
        result = allResults(tree.right, level + 1, result);
    }
    if (result.deep < level) {
        result.deep = level;
    }
    result.sum = result.sum + tree.value;
    result.nodes = result.nodes + 1;
    
    return result;
}


let result = {
    deep: 0,
    sum: 0,
    nodes: 0,
}

const values = allResults(nodes, null, result);

console.log("Sum = " + values.sum);
console.log("Deepest level = " + values.deep);
console.log("Nodes = " + values.nodes);

const testNodes = test ("Nodes");

// Valid cases
testNodes.isEqual(max(10, 20), 20, "Max of 10 and 20 should return 20");
testNodes.isEqual(max(-5, -2), -2, "Max of -5 and -2 should return -2");
testNodes.isEqual(max(7, 7), 7, "Max of 7 and 7 should return 7");

// Test with a simple tree
const simpleTree = {
    value: 10,
    left: { value: 5, left: null, right: null },
    right: { value: 15, left: null, right: null }
};

let result1 = { deep: 0, sum: 0, nodes: 0 };
testNodes.isEqual(allResults(simpleTree, 0, result1), { deep: 1, sum: 30, nodes: 3 }, "Simple tree should return { deep: 1, sum: 30, nodes: 3 }");

// Test with a larger tree
const complexTree = {
    value: 10,
    left: {
        value: 5,
        left: { value: 2, left: null, right: null },
        right: { value: 7, left: null, right: null }
    },
    right: {
        value: 15,
        left: { value: 12, left: null, right: null },
        right: { value: 18, left: null, right: null }
    }
};

let result2 = { deep: 0, sum: 0, nodes: 0 };
testNodes.isEqual(allResults(complexTree, 0, result2), { deep: 2, sum: 69, nodes: 7 }, "Complex tree should return { deep: 2, sum: 69, nodes: 7 }");

// Edge cases
// Single node tree
const singleNodeTree = { value: 42, left: null, right: null };

let result3 = { deep: 0, sum: 0, nodes: 0 };
testNodes.isEqual(allResults(singleNodeTree, 0, result3), { deep: 0, sum: 42, nodes: 1 }, "Single node tree should return { deep: 0, sum: 42, nodes: 1 }");

// Empty tree (null)
let result4 = { deep: 0, sum: 0, nodes: 0 };
testNodes.isEqual(allResults(null, 0, result4), { deep: 0, sum: 0, nodes: 0 }, "Empty tree should return { deep: 0, sum: 0, nodes: 0 }");

// Incorrect inputs
testNodes.isEqual(allResults(123, 0, { deep: 0, sum: 0, nodes: 0 }), { deep: 0, sum: 0, nodes: 0 }, "Non-object input should return { deep: 0, sum: 0, nodes: 0 }");
testNodes.isEqual(allResults("tree", 0, { deep: 0, sum: 0, nodes: 0 }), { deep: 0, sum: 0, nodes: 0 }, "String input should return { deep: 0, sum: 0, nodes: 0 }");
testNodes.isEqual(allResults([], 0, { deep: 0, sum: 0, nodes: 0 }), { deep: 0, sum: 0, nodes: 0 }, "Array input should return { deep: 0, sum: 0, nodes: 0 }");
testNodes.isEqual(allResults({}, 0, { deep: 0, sum: 0, nodes: 0 }), { deep: 0, sum: 0, nodes: 0 }, "Empty object should return { deep: 0, sum: 0, nodes: 0 }");