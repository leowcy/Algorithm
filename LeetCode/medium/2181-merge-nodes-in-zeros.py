# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        ptr = head
        prev = None
        
        while ptr:
            temp = ptr.val
            if temp == 0 and not ptr.next:
                prev.next = None
            elif temp == 0:
                if prev:
                    prev.next = ptr
                prev = ptr
            else:
                prev.val += temp
            ptr = ptr.next
        
        return head