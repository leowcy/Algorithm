class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        nums = n * n
        ladder = dict()

        direction = (n - 1) % 2 # decide if the total nums of rows is odd or even then line 12 below can use j % 2 to compare. Otherwise, it will go wrong.

        for j in range(n - 1, -1, -1):
            for k in range(n):
                if board[j][k] != -1:
                    if j % 2 == direction:
                        to_add = k + 1
                    else:
                        to_add = n - k
                    cur = (n - 1 - j) * n + to_add
                    print(cur)
                    ladder[cur] = board[j][k]

        print(ladder)

        q = [1]
        visited = [0 for _ in range(nums + 1)]
        visited[1] = 1
        ans = 0

        while q:
            ans += 1
            st = []
            for num in q:
                if num + 6 >= nums:
                    return ans
                for next_num in range(num + 1, num + 7):
                    if next_num in ladder and not visited[ladder[next_num]]:
                        if ladder[next_num] == nums:
                            return ans
                        visited[ladder[next_num]] = 1
                        st.append(ladder[next_num])
                    elif next_num not in ladder and not visited[next_num]:
                        st.append(next_num)
                        visited[next_num] = 1
            q = st
        return -1
