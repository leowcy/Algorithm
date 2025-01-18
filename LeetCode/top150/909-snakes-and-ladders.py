def snakesAndLadders(board: list[list[int]]) -> int:
    n = len(board)
    nums = n * n
    ladder = dict()

    for j in range(n):
        for k in range(n):
            if board[j][k] != -1:
                if (n - 1 - j) % 2 == 1:
                    num = n - k
                else:
                    num = k + 1
                num += (n - 1 - j) * n
                ladder[num] = board[j][k]
    
    # print(ladder)

    visited = [0 for _ in range(nums+1)]
    visited[1] = 1
    steps = 0
    curr = [1]

    while curr:
        steps += 1
        new = set()
        for j in curr:
            if nums - j <= 6:
                return steps
            for k in range(j+1, j+7): # to 7 since 7 not included
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
            
    

board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
print(snakesAndLadders(board=board))