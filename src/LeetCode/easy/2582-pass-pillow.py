class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        
        stand, flag= 1, 1

        while time:
            time -= 1
            if flag:
                stand += 1
                if stand == n:
                    flag = not flag
            else:
                stand -= 1
                if stand == 1:
                    flag = not flag
        
        return stand
    
        # Solution 2: (pure math)
        # res = 1

        # times = time // (n-1)
        # if times % 2 == 1:
        #     res = n

        # if res == 1:
        #     return time % (n-1) + res

        # return res - time % (n-1)