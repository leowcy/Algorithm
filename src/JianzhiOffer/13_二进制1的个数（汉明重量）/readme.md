### 二进制中 1 的个数

请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9  表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。

## solution 1:

- This is about the bit calculation.
巧用 x &= x - 1 清零最低位的1 这一特性不断迭代n 并记数count即可
x = 5 -> 二进制 101
x - 1 -> 二进制 100
x & x - 1 ->
101 & 100 -> 按位与&后 得到 100 效果低位的0被清除了
eg：xx1011 (xx指带32/64位剩下的0 我就不全部写下去了)
xx1011 - 1 -> xx1010
xx1011 & xx1010 => xx1010 & count++
基于xx1010 继续执行 直到 xx00 全部为0 我们就依次消除了所有的0
这个过程中 count++ 的次数即为1个总个数