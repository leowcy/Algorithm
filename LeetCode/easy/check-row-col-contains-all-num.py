# Title: Check and make sure every row and column has the num from 1 to n
from collections import Counter

def Solution(m: list[list[int]]) -> bool:
    n = len(m)
    for row in m:
        cnt = Counter(row)
        if len(cnt) != n:
            return False

    for i in range(n):
        temp = []
        for j in range(n):
            temp.append(m[j][i])
        cnt = Counter(temp)
        if len(cnt) != n:
            return False

    return True

print(Solution([[1,2,3], [3,2,1], [2,3,1]]))
