# Brute force solution - time exceed
class ProductOfNumbers:

    def __init__(self):
        self.st = []

    def add(self, num: int) -> None:
        self.st.append(num)

    def getProduct(self, k: int) -> int:
        ans = 1
        for i in range(len(self.st) - 1, len(self.st) - k - 1, -1):
            ans *= self.st[i]
        return ans


# Solutoin 2: time exceed again
class ProductOfNumbers:

    def __init__(self):
        self.st = []
        self.prod = []
        self.init = 1

    def add(self, num: int) -> None:
        self.st.append(num)
        self.prod.append(num)
        for i in range(len(self.prod) - 1):
            self.prod[i] *= num

    def getProduct(self, k: int) -> int:
        return self.prod[-k]


# Solution 3:
class ProductOfNumbers:
    def __init__(self):
        self.prod = [1]
        self.size = 0

    def add(self, num: int) -> None:
        if num == 0:
            self.prod = [1]
            self.size = 0
        else:
            self.prod.append(num * self.prod[-1])
            self.size += 1

    def getProduct(self, k: int) -> int:
        if k > self.size:
            return 0
        return self.prod[-1] // self.prod[-k - 1]
