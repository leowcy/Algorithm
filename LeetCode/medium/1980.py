# Use python int to binary - bin(int)[2:] - Beat 100%
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums[0])
        s = set(nums)

        for num in range(2 ** (n + 1)):
            binary_num = bin(num)[2:]

            while len(binary_num) < n:
                binary_num += "0"

            if binary_num not in s:
                return binary_num


# Cantor's diagonal argument - use a opposite bit from each str of num and generate a binary
# that doesn't exist or same as any current binary str
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        ans = []
        for i in range(len(nums)):
            curr = nums[i][i]
            ans.append("1" if curr == "0" else "0")

        return "".join(ans)
