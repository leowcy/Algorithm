class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        n = len(box)
        m = len(box[0])

        # move to right first
        for row in range(n):
            for column in range(m-1, -1, -1):
                if box[row][column] == ".":
                    temp = column - 1
                    while temp > -1:
                        if box[row][temp] == "#":
                            box[row][column] = "#"
                            box[row][temp] = "."
                            break
                        elif box[row][temp] == "*":
                            column = temp
                            break
                        temp -= 1

        # rotate the result
        return [list(val)[::-1] for val in zip(*box)]