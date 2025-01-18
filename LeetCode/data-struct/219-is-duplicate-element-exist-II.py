# Brute force - O(n^2) - beat 5%
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        cnt = dict()

        for i, val in enumerate(nums):
            if val not in cnt:
                cnt[val] = [i]
            else:
                cur = cnt[val]
                for each in cur:
                    if abs(i - each) <= k:
                        return True
                cnt[val].append(i)

        return False


# After a second thought, no need to maintain a loop inside. Since the closer one will always the next one.
# So just maintain the latest index value is good enough. Previous value will only be a larger gap number.abs
# O(n) - beat 98.47%
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        cnt = dict()

        for i, val in enumerate(nums):
            if val not in cnt:
                cnt[val] = i
            else:
                cur = cnt[val]
                if i - cur <= k:
                    return True
                cnt[val] = i

        return False


# Solution 3: Fixed length sliding window - Using deque and popleft - Beat 5%, a little slow
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        s = deque()

        for i, val in enumerate(nums):
            # condition, now it is inside the sliding window so we can return True
            if val in s:
                return True

            s.append(val)

            while len(s) > k:
                s.popleft()

        return False


# Solution 4: Similar fixed length sliding window, using set - beat 71%
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        st = set()
        for i, x in enumerate(nums):
            if x in st:
                return True
            st.add(x)
            if i >= k:
                st.remove(nums[i - k])
        return False
