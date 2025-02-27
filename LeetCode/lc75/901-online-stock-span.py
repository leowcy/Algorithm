# Solution 1: time exceed
class StockSpanner:

    def __init__(self):
        self.history = []

    def next(self, price: int) -> int:
        ans = 1
        for i in range(len(self.history) - 1, -1, -1):
            if self.history[i] <= price:
                ans += 1
            else:
                break
        self.history.append(price)
        return ans


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)


# Take the next function as the for loop. Monotonic stack now in history. Only has a lower value with a span.
class StockSpanner:

    def __init__(self):
        self.history = []

    def next(self, price: int) -> int:
        ans = 1

        while self.history and self.history[-1][0] <= price:
            cur = self.history.pop()
            ans += cur[1]

        self.history.append((price, ans))
        return ans


# Your StockSpanner object will be instantiated and called as such:
# obj = StockSpanner()
# param_1 = obj.next(price)
