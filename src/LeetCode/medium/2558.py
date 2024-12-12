class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        for i in range(len(gifts)):
            gifts[i] *= -1
        
        heapify(gifts) # default min heap by heapify function

        while k and -gifts[0] > 1:
            heapreplace(gifts, -isqrt(-gifts[0])) # the min value out mean max positive num out and do the square and push it back to heap
            k -= 1

        return -sum(gifts)        