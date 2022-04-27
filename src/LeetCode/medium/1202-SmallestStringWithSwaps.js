/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
    let len = s.length;

    let adj = new Array(len).fill(0).map(() => []);

    for (const [a, b] of pairs) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let visited = new Array(len).fill(false);
    let ans = new Array(len);
    let str, idx;

    let dfs = (node) => {
        visited[node] = true;
        idx.push(node);
        str.push(s[node]);
        for (let next of adj[node]) {
            if (!visited[next]) dfs(next);
        }
    }

    for (let i = 0; i < len; i++) {
        if (!visited[i]) {
            str = [];
            idx = [];
            dfs(i);
            idx.sort((a, b) => a - b);
            str.sort();
            for (let j = 0; j < str.length; j++) {
                ans[idx[j]] = str[j];
            }
        }
    }

    return ans.join('');
};