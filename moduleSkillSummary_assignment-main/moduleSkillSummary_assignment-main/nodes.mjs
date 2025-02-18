import data from "./example_files/nodes.json";

function max(a, b) {
    return a > b ? a : b;
}

function deepestLevel(tree, level, max, node) {
    if (tree.left) {
        node, max = deepestLevel(tree.left, level + 1, max);
    }
    if (tree.right) {
        node, max = deepestLevel(tree.right, level + 1, max);
    }
    if (max < level) {
        max = level;
        node = tree.value;
    }
    return node, max;
}

console.log(deepestLevel(data, null, null, null));