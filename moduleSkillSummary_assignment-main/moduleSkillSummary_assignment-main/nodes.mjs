import { nodes } from "./data.mjs";
function max(a, b) {
    return a > b ? a : b;
}

function allResults (tree, level, result) {
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