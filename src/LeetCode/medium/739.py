# Solution 1: Brute force - time exceed (Back to front and updating ans array. Slightly different from from to back way.)
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n

        for i in range(n-1, 0, -1):
            for j in range(i):
                if temperatures[i] > temperatures[j]:
                    if ans[j] == 0:
                        ans[j] = i - j
                    else:
                        ans[j] = min(i - j, ans[j])

        return ans 


# Solution 2: Using a hashmap. But still time exceed.
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        temp_map = {}

        for i, val in enumerate(temperatures):
            for x, each in list(temp_map.items()):
                if val > each:
                    ans[x] = i - x
                    del temp_map[x]

            temp_map[i] = val

        return ans 


# Solution 3: Still time exceed. Appearance using helper array, but indeed brute force.
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        helper = [0] * n
    
        for i in range(n-1):
            helper[i] = temperatures[i+1] - temperatures[i]

        for i, val in enumerate(helper):
            if val > 0:
                ans[i] = 1
            else:
                temp = helper[i]
                for j in range(i+1, n):
                    temp += helper[j]
                    if temp > 0:
                        ans[i] = j - i + 1
                        break

        return ans 


# Solution 4: Stack
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        s = []

        for i in range(n-1, -1, -1):
            cur = temperatures[i]

            # Update stack
            while s and temperatures[s[-1]] <= cur:
                s.pop()
            
            if s:
                ans[i] = s[-1] - i
            
            s.append(i)

        return ans 


# Solution 5: Stack front to back
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        ans = [0] * n
        s = []

        for i in range(n):
            cur = temperatures[i]

            # Update stack
            while s and temperatures[s[-1]] < cur:
                j = s.pop()
                ans[j] = i - j
            
            s.append(i)

        return ans 