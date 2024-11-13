# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        
        critial_points = []
        count = 0
        prev, next_node = None, None
        while head:
            temp = head.val
            next_node = head.next
            if prev and next_node:
                if (
                    (prev.val < temp and temp > next_node.val)
                    or (prev.val > temp and temp < next_node.val)
                ):
                    critial_points.append(count)
            prev = head
            count += 1
            head = head.next
        
        if len(critial_points) > 1:
            max_distance = critial_points[-1] - critial_points[0]
            min_distance = critial_points[-1] - critial_points[0]
            for i in range(1, len(critial_points)):
                min_distance = min(min_distance, critial_points[i] - critial_points[i-1])
            return [min_distance, max_distance]

        return [-1, -1]
                