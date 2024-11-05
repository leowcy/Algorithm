class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        nums = n * n
        ladder = dict()

        for j in range(n):
            for k in range(n):
                if board[j][k] != -1:
                    # check odd or event layer. remember, start from bottom left.
                    if (n - 1 - j) % 2 == 1:
                        to_add = n - k
                    else:
                        to_add = k + 1
                    
                    to_add += (n - 1 - j) * n
                    ladder[to_add] = board[j][k]
        
        steps = 0
        visited = [0 for _ in range(nums+1)]
        visited[1] = 1
        curr = [1]

        while curr:
            steps += 1
            new = set()
            for j in curr:
                if j + 6 >= nums:
                    return steps
                for k in range(j+1, j+7):
                    if k in ladder and (not visited[ladder[k]]):
                        if ladder[k] == nums:
                            return steps
                        visited[ladder[k]] = 1
                        new.add(ladder[k])
                    elif k not in ladder and (not visited[k]):
                        visited[k] = 1
                        new.add(k)
            curr = new
            
        return -1
