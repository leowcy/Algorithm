class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        ans = 0
        st = []

        for i, val in enumerate(height):
            # maintain stack
            while st and height[st[-1]] <= val:
                mid = st.pop()
                if not st:
                    break
                left = st[-1]
                dh = min(val, height[left]) - height[mid]
                ans += dh * (i - st[-1] - 1)
        
            st.append(i)
        
        return ans
