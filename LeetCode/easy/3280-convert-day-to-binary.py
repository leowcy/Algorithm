class Solution:
    def convertDateToBinary(self, date: str) -> str:
        arr = date.split("-")
        arr = map(lambda x: bin(int(x))[2:], arr)
        return "-".join(arr)
