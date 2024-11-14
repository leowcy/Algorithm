class Solution:
    def minOperations(self, logs: List[str]) -> int:
        level = 0
        for each in logs:
            temp = each.split("/")
            if temp[0] == ".":
                continue
            elif temp[0] == "..":
                level -= 1
                level = 0 if level < 0 else level
            else:
                level += 1

        return level