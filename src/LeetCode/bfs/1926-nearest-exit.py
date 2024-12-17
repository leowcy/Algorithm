class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        visited = deque([(entrance[0], entrance[1], 0)])
        row = len(maze)
        column = len(maze[0])
        d = [(0,1), (0, -1), (1, 0), (-1, 0)]
        maze[entrance[0]][entrance[1]] = '+'

        while visited:
            cx, cy, steps = visited.popleft()
            for dx, dy in d:
                new_x = dx + cx
                new_y = dy + cy
                if (
                    0 <= new_x < row
                    and 0 <= new_y < column
                    and maze[new_x][new_y] == "."
                ):  
                    # reach border
                    if (
                        new_x == 0
                        or new_x == row-1
                        or new_y == 0
                        or new_y == column - 1
                    ):
                        return steps + 1
                    
                    # set new one as a wall for don't going backward
                    maze[new_x][new_y] = "+"
                    # append to visited list
                    visited.append((new_x, new_y, steps+1))

        return -1
