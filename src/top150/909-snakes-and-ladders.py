class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        target = n * n
        ladder = dict()

        # calculate the actualy number and put it into the ladder dict
        for j in range(n):
            for k in range(n):
                if board[j][k] != -1:
                    if (n - 1 - j) % 2 == 0:
                        num = k + 1 # odd layer is left to right, so num index is k + 1 on this layer
                    else:
                        num = n - k # even layer is right to left, so n - k
                    num += (n - 1 - j) * n # n - 1 - j here is the layer to multiply. Then plus nums above
                    ladder[num] = board[j][k]
        
        visited = [0 for j in range(target+1)]
        visited[1] = [1]
        curr = [1]
        steps = 0

        while curr:
            steps += 1
            new = set()
            for j in curr:
                if target - j <= 6:
                    return steps # Found the final 6 steps range solution
                for k in range(j+1, j+7):
                    if k in ladder and (not visited[ladder[k]]):
                        if ladder[k] == target:
                            return steps
                        new.add(ladder[k])
                        visited[ladder[k]] = 1
                    elif k not in ladder and (not visited[k]):
                        new.add(k)
                        visited[k] = 1
            curr = new
        
        return -1
        
