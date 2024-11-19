class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        
        ans = 0
        temp_sum = sum(arr[:k])

        for i in range(k, len(arr)):
            print(temp_sum)
            # check condition
            if temp_sum / k >= threshold:
                ans += 1
            
            # update value
            temp_sum = temp_sum - arr[i - k] + arr[i]
        
        # calculate the last running time
        return ans+1 if temp_sum / k >= threshold else ans