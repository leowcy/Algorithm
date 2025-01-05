class Solution:
    def sortPeople(self, names: list[str], heights: list[int]) -> list[str]:
        
        map = {}

        for i in range(len(names)):
            map[heights[i]] = names[i]
        
        heights.sort(reverse=True)

        res = []
        
        for each in heights:
            res.append(map[each])

        return res