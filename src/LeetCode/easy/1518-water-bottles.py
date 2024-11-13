class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        drinked = numBottles

        while numBottles // numExchange > 0:
            new = numBottles // numExchange
            drinked += new
            numBottles = new + numBottles % numExchange

        return drinked