from collections import deque


def new_function(input: list[int]) -> int:
    count = 0
    n = len(input)
    temp = []
    
    for each in input:
        print(f"each: {each}")
        turns = 1
        
        while len(temp) and temp[-1][0] <= each:
            _, t = temp.pop()
            print(f"t: {t}")
            turns = max(t+1, turns)
        
        # for max number in the temp stack, make turns as 0 since we don't need to delete this element so require turns is only 0
        if len(temp) == 0:
            turns = 0
        
        temp.append((each, turns))
        print(f"temp: {temp}")
        count = max(turns, count)        
    
    return count


input = [5,3,4,8,1]
print(new_function(input))