/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const len = graph.length;
    if (!len) return false;

    const colors = new Array(len).fill(-1);

    for (let node = 0; node < len; node++) {
        if (colors[node] !== -1) {
            // already colored
            continue;
        }

        if (!dfs(node, graph, colors, 1)) {
            return false;
        }
    }

    return true;
};

var dfs = function (node, graph, colors, currColor) {
    colors[node] = currColor;
    const nextColor = 1 - currColor;

    for (let i = 0; i < graph[node].length; i++) {
        const neiNode = graph[node][i];
        if (colors[neiNode] == currColor) {
            return false;
        } else if (colors[neiNode] == -1 && !dfs(neiNode, graph, colors, nextColor)) {
            return false;
        }
    }

    return true;
}