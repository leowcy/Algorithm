class Solution:
    # all the neighbour for every position
    NEIGHBORS = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [1, 3, 5],
        [2, 4]
    ]

    def slidingPuzzle(self, board: List[List[int]]) -> int:
        def get(status: str) -> Generator[str, None, None]:
            s = list(status)
            x = s.index("0")
            for y in Solution.NEIGHBORS[x]:
                s[x], s[y] = s[y], s[x]
                yield "".join(s)
                s[x], s[y] = s[y], s[x]
        
        initial = "".join(str(num) for num in sum(board, []))
        if initial == "123450":
            return 0
        
        q = deque([(initial, 0)])
        seen = {initial}

        while q:
            status, step = q.popleft()
            for next_status in get(status):
                if next_status not in seen:
                    if next_status == "123450":
                        return step + 1
                    q.append((next_status, step + 1))
                    seen.add(next_status)
        
        return -1