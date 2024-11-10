class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        res = ["1"]
        for i in range(1, n):
            if (i+1) % 15 == 0:
                to_add = "FizzBuzz"
            elif (i+1) % 3 == 0:
                to_add = "Fizz"
            elif (i+1) % 5 == 0:
                to_add = "Buzz"
            else:
                to_add = str(i+1)
            res.append(to_add)
        return res
