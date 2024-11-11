def _check_if_satisfied(bloomed_list: list[int], m: int, k: int) -> bool:
    # find k adjacent number now
    i, j = 0, k
    found_bouquet = 0
    while j <= len(bloomed_list):
        cur_bloomed_list = bloomed_list[i:j]
        temp_sum = sum(cur_bloomed_list)
        if temp_sum >= k: # found one qualified
            found_bouquet += 1
            i = j
            j = i + k
        else:
            i += 1
            j += 1
    
    return found_bouquet >= m


def minDays(bloomDay: list[int], m: int, k: int) -> int:
    
    # on day 1 to day n, we keep track of what is the bloom status right now.
    # Then we compare by using k to see how many bouquet we can make.
    # If we can make m bouquet, return the Number.
    # Loop till the then, still cant meet m, exit the loop. Return -1.

    if k > len(bloomDay) or m * k > len(bloomDay):
        return -1

    max_bloom_day = max(bloomDay)
    bloomed_list = [0] * len(bloomDay)

    # loop from 1 day to max day
    for i in range(1, max_bloom_day+1):
        for idx, v in enumerate(bloomDay):
            if i >= v:
                bloomed_list[idx] = 1
        
        # now we have the bloomed status after each day here.
        # check how many we can staisfied
        if _check_if_satisfied(bloomed_list, m, k):
            return i

    return -1


print(minDays([1000,1000], 1, 1))
# Works but time exceed.

# Solution 2:
def minDays(self, bloomDay: List[int], m: int, k: int) -> int:

    def canMakeBouquets(days: int) -> bool:
        bouquets = 0
        flowers =0

        for bloom in bloomDay:
            if bloom <= days:
                flowers += 1
                if flowers == k:
                    bouquets += 1
                    flowers = 0
            else:
                flowers = 0
            if bouquets >= m:
                return True
        return False
    
    l, r = min(bloomDay), max(bloomDay)
    while l < r:
        mid = (l+r) // 2
        if canMakeBouquets(mid):
            r = mid
        else:
            l = mid + 1
    
    return l if canMakeBouquets(l) else -1