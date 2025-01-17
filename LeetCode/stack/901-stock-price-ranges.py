# Solution 1: Brute force O(n^2) if input next N times. Time exceeded.
class StockSpanner:
    def __init__(self):
        self.prices = []

    def next(self, price: int) -> int:
        self.prices.append(price)
        n = len(self.prices)
        if n == 1:
            return 1

        ans = 0
        for i in range(n - 1, -1, -1):
            if self.prices[i] <= price:
                ans += 1
            else:
                break

        return ans


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)


# Solution 2: stack
class StockSpanner:

    def __init__(self):
        self.prices = []
        self.st = list()

    def next(self, price: int) -> int:
        ans = 1
        while self.st and self.st[-1][0] <= price:
            p, c = self.st.pop()
            ans += c
        self.st.append((price, ans))

        return ans


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
