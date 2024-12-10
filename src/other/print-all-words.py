def print_all_words(input):
    d = [[1,0], [-1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]]
    row = len(input)
    column = len(input[0])
    ans = set()
    
    def dfs(visited, path, x, y, ans):
        path.append(input[x][y])
        visited[x][y] = True
        ans.add(''.join(path))
        
        for dx, dy in d:
            nx, ny = x + dx, y + dy
            if 0 <= nx < len(input) and 0 <= ny < len(input[0]) and not visited[nx][ny]:
                dfs(visited, path, nx, ny, ans)
        
        path.pop()
        visited[x][y] = False
    
    visited = [[False for _ in range(column)] for _ in range(row)]
    
    for i in range(row):
        for j in range(column):
            dfs(visited, [], i, j, ans)
    
    return ans
    


input = [["a","b","c"], ["d","e","f"], ["g","h","i"]]
print(print_all_words(input))