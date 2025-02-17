# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(
        self, head: Optional[ListNode]
    ) -> Optional[ListNode]:

        ans = head

        while head.next:
            temp = ListNode(gcd(head.val, head.next.val))
            temp_next = head.next
            head.next = temp
            temp.next = temp_next
            head = temp.next

        return ans


# More clear solution:
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(
        self, head: Optional[ListNode]
    ) -> Optional[ListNode]:

        ans = head

        while head.next:
            head.next = ListNode(gcd(head.val, head.next.val), head.next)
            head = head.next.next # use .next.next

        return ans
