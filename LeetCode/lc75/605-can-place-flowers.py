class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True

        if len(flowerbed) == 1:
            return True if flowerbed[0] == 0 and n <= 1 else False

        if flowerbed[0] == 0 and flowerbed[1] == 0:
            flowerbed[0] = 1
            n -= 1

        if n == 0:
            return True

        if flowerbed[-1] == 0 and flowerbed[-2] == 0:
            flowerbed[-1] = 1
            n -= 1

        if n == 0:
            return True

        for i in range(1, len(flowerbed) - 1):
            if n == 0:
                return True

            if flowerbed[i - 1] == 0 and flowerbed[i + 1] == 0 and flowerbed[i] == 0:
                n -= 1
                flowerbed[i] = 1

        return False


# Solution 2:
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:

        flowerbed = [0] + flowerbed + [0] # manipulate the array is important

        for i in range(1, len(flowerbed) - 1):
            if flowerbed[i - 1] == 0 and flowerbed[i + 1] == 0 and flowerbed[i] == 0:
                n -= 1
                flowerbed[i] = 1

            if n <= 0:
                return True

        return False
