class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        d_dict = defaultdict(int) # pass int inside defaultdict to make non value as 0 for adding below
        ans = 0

        for i, (a, b) in enumerate(rectangles):
            cur = a / b
            ans += d_dict[cur]
            d_dict[cur] += 1

        return ans
