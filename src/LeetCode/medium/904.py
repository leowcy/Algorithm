class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        ans = left = 0
        cnt = Counter()

        for right, val in enumerate(fruits):
            cnt[val] += 1

            while len(cnt) > 2:
                cnt[fruits[left]] -= 1
                if cnt[fruits[left]] == 0:
                    del cnt[fruits[left]]
                left += 1
            
            ans = max(ans, right - left + 1)
        
        return ans