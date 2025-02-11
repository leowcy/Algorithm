# find missing from 1 to 99 number
def find_missing(input: list):
    helper = [0] * 100
    for each in input:
        helper[each] += 1

    ans = ""
    for i, val in enumerate(helper):
        if i == 0:
            continue
        if val == 0:
            ans += f"{i},"

    return ans[:-1]

print(find_missing([1,3,5,7,12,22,44,56,89,99]))
