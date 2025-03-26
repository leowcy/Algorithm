# Mark two smallest element to keep track when seeing smaller value.
# In the last else, means we found a smallest a and smaller b and now find a c,
# we found a triple increasing subsequence, return True.
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        a, b = inf, inf

        for each in nums:
            if each <= a:
                a = each
            elif each <= b:
                b = each
            else:
                return True

        return False
