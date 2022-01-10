/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // Khman Algorithm
    const order = [];
    const queue = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);

    for (const [e, v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        indegree[e]++;
    }

    // get the first 0 indegree nodes and push them into the queue
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) queue.push(i);
    }

    while (queue.length) {
        // take the first element out
        const v = queue.shift();
        if (graph.has(v)) {
            let temp = graph.get(v);
            for (const each of temp) {
                indegree[each]--;
                if (indegree[each] == 0) {
                    queue.push(each);
                }
            }
        }

        order.push(v);
    }

    return order.length == numCourses ? order : [];
};

findOrder(2, [[0, 1]]);