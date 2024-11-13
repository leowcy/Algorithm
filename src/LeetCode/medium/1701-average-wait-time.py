class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        
        prev = customers[0][0] # first arrival time
        wait_time_list = []

        for i in range(0, len(customers)):
            arrival_time = customers[i][0]
            wait_time = customers[i][1]
            if arrival_time >= prev:
                wait_time_list.append(wait_time)
                prev = arrival_time + wait_time
            else:
                wait_time_list.append(wait_time + prev - arrival_time)
                prev += wait_time

        print(wait_time_list)
        
        return sum(wait_time_list)/len(wait_time_list)