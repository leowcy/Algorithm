#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'getMaxSumarr' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY item_weights as parameter.
#

def getMaxSumarr(item_weights):
    # Write your code here
    n = len(item_weights)
    m = n // 3
    
    min_heap = []
    prefix_min = [0] * n
    total_min = 0
    
    import heapq
        
    for i in range(n):
        heapq.heappush(min_heap, item_weights[i])
        total_min += item_weights[i]
        if len(min_heap) > m:
            total_min -= heapq.heappop(min_heap)
        prefix_min[i] = total_min
    
    max_heap = []
    suffix_max = [0] * n
    total_max = 0
    
    for i in range(n-1, -1, -1):
        heapq.heappush(max_heap, -item_weights[i])
        total_max += item_weights[i]
        if len(max_heap) > m:
            total_max -= -heapq.heappop(max_heap)
        suffix_max[i] = total_max
    
    ans = float("-inf")
    for i in range(m-1, n-m):
        ans = max(ans, prefix_min[i] - suffix_max[i+1])
    
    return ans

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    item_weights_count = int(input().strip())

    item_weights = []

    for _ in range(item_weights_count):
        item_weights_item = int(input().strip())
        item_weights.append(item_weights_item)

    result = getMaxSumarr(item_weights)

    fptr.write(str(result) + '\n')

    fptr.close()
