# Prefix + Hashmap - 分析一下原理。
# 通过前缀和，首先可以快速计算子数组的和，省时间。
# 然后哈希表来记录前面出现的前缀和的个数，然后我们直接加到答案里，为什么可以，原因如下。
# 首先声明这个前缀和是带0作为起始的，所以cnt[0] == 1的。
# 然后我们可以得知，子数组和的概念 = cnt[idx] - cnt[子idx]，如果我们要找和为K，那么利用性质，此index的前缀和，减去
# k，得到剩余的部分我们需要的值。这个值如果是0，其实就代表了，从头开始加到当前位置，是一种和为k的结果。当然后，如果中间
# 还有别的前缀和值为0，那么也是一种结果。例如[1, -1, 5] k == 5。我们可以是全部[1,-1,5]也可以是[5]单独一个，所以前面
# 哈希表存的和为0的个数是2，原因是在cnt[1 + -1]时，我们又得到了一次0。
# 总而言之，在当前位置，我们通过减去目标值k，然后询问哈希表，前面在任何位置是不是出现过我们要的值，如果是，说明是一种和为
# k的子数组，把这个答案次数，添加到ans。最终遍历从头到尾，然后返回ans。
# 注意了，必须要先增加ans，在更新哈希表，否则先更新哈希表，值会不准确。
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        p = [0] * (n + 1)
        for i, val in enumerate(nums):
            p[i + 1] = p[i] + val

        ans = 0
        cnt = defaultdict(int)
        for each in p:
            ans += cnt[each - k]
            cnt[each] += 1
        return ans
