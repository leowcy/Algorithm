class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        # since sorted, insert from end to front. One nums2 reach -1, all sorted in nums1

        midx = m - 1 # last valild num from nums1
        nidx = n - 1 # last num from nums2
        right = m + n - 1 # the position to put the largest one

        while nidx >= 0:
            if nums2[nidx] >= nums1[midx] or midx < 0:
                nums1[right] = nums2[nidx]
                nidx -= 1
            else:
                nums1[right] = nums1[midx]
                midx -= 1
            
            right -= 1

