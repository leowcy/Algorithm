# Beat 100% - Trick is to find ] and check previous [ and operate in the middle
class Solution:
    def decodeString(self, s: str) -> str:
        st = []
        ans = ""

        for i, val in enumerate(s):
            if val == "]":
                temp = []
                while st and st[-1] != "[":
                    temp.append(st.pop())
                temp_s = "".join(temp[::-1])

                st.pop()  # pop symbol "["

                # for times, pop once could be not enough. Need check all numbers.
                nums = []
                while st and st[-1] in "0123456789":
                    nums.append(st.pop())
                times = int("".join(nums[::-1]))
                s_to_add = times * temp_s
                
                if st:
                    st.append(s_to_add)
                else:
                    ans += s_to_add
            else:
                st.append(val)

        if st:
            ans += "".join(st)

        return ans
