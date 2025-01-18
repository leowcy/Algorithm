###
# Best day to cross mountain
# 
# 山峰的高度底下是：
# mountain: [1, 2, 3, 0]
# 
# 每一天的下雪情况：
# snow: [[1,0,0,1], [0,0,0,0], [1,0,1,0]]
# 
# 如果两天同时没下雪，有雪的地方融化了，高度-1。
# 
# 寻找出最好一天穿越雪山。注意，穿越雪山只能最多向上或者向下移动高度为1。如果高度落差为2，则这一天无法爬过雪山。
# 寻找哪一天能顺利通过雪山，并且最少得攀爬数。
# ###

def best_day_cross_mountain(m, s):

    m_init = m.copy()

    def _if_can_pass_mountain(high: list[int]) -> int:
        prev = high[0]
        effort = 0
        for i in range(1, len(high)):
            if abs(high[i] - prev) > 1:
                return -1
            effort += abs(high[i] - prev)
            prev = high[i]
        
        return effort
    
    no_snow = 0
    res = []
    for index, day in enumerate(s):
        if sum(day) == 0:
            no_snow += 1
            if no_snow == 2:
                no_snow = 0
                # remove snow on mountain if there is snow
                for i, _ in enumerate(m):
                    m[i] = m[i] - 1 if m[i] > m_init[i] else m_init[i]
                # print(m)
                # print(m_init)
        else:
            no_snow = 0
            for peak, snow in enumerate(day):
                m[peak] += snow
        
        # print(m)

        if _if_can_pass_mountain(m) != -1:
            res.append([index, _if_can_pass_mountain(m)])
        
    # print(res)
    if res:
        ans = res[0]
        for day, effort in res[1:]:
            if effort < ans[1]:
                ans = [day, effort]
        return ans
    return [-1, -1]


mountain = [1, 2, 3, 3]
snow = [[1,0,0,1], [0,0,0,0], [0,0,0,0], [2,1,0,0]]
print(best_day_cross_mountain(mountain, snow))

