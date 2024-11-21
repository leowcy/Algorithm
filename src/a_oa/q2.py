#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'minCost' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts following parameters:
#  1. STRING password
#  2. STRING reference
#  3. INTEGER_ARRAY cost
#

def minCost(password, reference, cost):
    # Write your code here
    from collections import Counter

    p_cnt = Counter(password)
    r_set = set(reference)
    
    ans = float("inf")
    
    for c in p_cnt:
        if c in r_set:
            temp_cost = p_cnt[c] * cost[ord(c) - ord("a")]
            ans = min(ans, temp_cost)
    
    return ans
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    password = input()

    reference = input()

    cost_count = int(input().strip())

    cost = []

    for _ in range(cost_count):
        cost_item = int(input().strip())
        cost.append(cost_item)

    result = minCost(password, reference, cost)

    fptr.write(str(result) + '\n')

    fptr.close()
