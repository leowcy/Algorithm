class Solution:
    def maxSum(self, nums: List[int]) -> int:
        ans = -1
        m = [-inf] * 10 # Key is here. Since we know the digit will only be 0 - 9, so make a length of ten list here.
        for each in nums:
            temp = max(map(int, str(each))) # use map(int, str) function to get a list of digit and use max() to get the max number of digit. Smart!
            ans = max(ans, each + m[temp])
            m[temp] = max(m[temp], each)

        return ans
