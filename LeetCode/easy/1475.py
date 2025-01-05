# Solution 1: Brute force
# TC: O(n ** 2)  SC: O(1)
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        n = len(prices)
        ans = prices[:]

        for i in range(n):
            for j in range(i+1, n):
                if prices[j] <= prices[i]:
                    ans[i] = prices[i] - prices[j]
                    break

        return ans
    

# Solution 2: Maintain a stack for this.
# Time complexity: Loop is O(n), the while insdie only will pop in and out n numbers. So inside loop is O(1). So total TC is O(n)
# Space complexity: O(n)
class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        n = len(prices)
        ans = prices[:]
        st = []

        for i in range(n):
            while st and prices[i] <= prices[st[-1]]:
                cur = st.pop()
                ans[cur] = prices[cur] - prices[i]
            st.append(i)

        return ans