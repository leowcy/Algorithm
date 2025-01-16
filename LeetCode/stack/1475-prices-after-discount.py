class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        n = len(prices)
        ans = prices[:]
        st = []

        for i, val in enumerate(prices):
            while st and prices[st[-1]] >= val:
                cur = st.pop()
                ans[cur] = prices[cur] - val

            st.append(i)

        return ans
