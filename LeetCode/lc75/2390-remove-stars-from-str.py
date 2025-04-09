class Solution:
    def removeStars(self, s: str) -> str:
        st = []

        for i, val in enumerate(s):
            if val == "*":
                if st:
                    st.pop()
            else:
                st.append(val)

        return "".join(st)
