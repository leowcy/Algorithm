# AC!!!!!!!!!!!!!!!!!!! NICE!!!!!!!!!!!优化成功！大于mn的数我们不做处理，直接ans+1。
class Solution:
    def numOfUnplacedFruits(self, fruits: list[int], baskets: list[int]) -> int:
        n = len(fruits)
        st = []
        ans = 0
        right = 0
        mn = inf

        for i, val in enumerate(fruits):
            if val >= mn:
                ans += 1
                continue
            else:
                is_placed = False
                # check st first since st is storing previous unuse value
                if len(st) > 0:
                    temp_i = 0
                    while st and temp_i < len(st):
                        if val <= baskets[st[temp_i]]:
                            is_placed = True
                            st.pop(temp_i)
                            break
                        temp_i += 1

                # continue if found one from st
                if is_placed:
                    continue

                while right < n:
                    if val <= baskets[right]: # qualified
                        is_placed = True
                        right += 1
                        break
                    else:
                        st.append(right)
                        right += 1

                if not is_placed:
                    mn = min(val, mn)
                    ans += 1

        return ans

s = Solution()
# s.numOfUnplacedFruits([52, 10, 11], [54, 11, 22])
s.numOfUnplacedFruits([4,2,5], [10,10,10])
