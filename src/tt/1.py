# T1:
# TikTok is working to make the process of creating unique video IDs more efficient.
# A TikTok video ID is represented as a string called idStream of length n, 
# made up of the digits 0-9. TikTok also has a list called videoIds, 
# which contains m target video ID strings, each also made up of digits 0-9.
# For each target video ID in videoIds. find the shortest part of idStream that contains 
# all the characters needed to form any possible arrangement (permutation) of the target string.
# You need to return an array of integers. The number at each position i in this array should 
# be the length of the shortest part of idStream that can include all characters of the string 
# in videolds. If it's impossible to create the target video ID from idStream, return -1 for that position.
# 样例
# idStream= "064819848398"
# videolds =["088", "364", "07"]
# 输出
# [7, 10, -1]
# To construct "088", the first 7 characters of the idStream ("064819848398") contain "0" "8" "8". Therefore, the answer for this target is 7.
# To construct "364", we need to access the first 10 characters of the idStream ("064819848398") and use the digits '6', '4', and '3'. 
# By rearranging these digits to match "364". the answer is 10.
# For "07", there is no prefix in the idStream that contains both "0" and "7".

def _check_if_all_zero(number_map: dict) -> bool:
    for _, v in number_map.items():
        if v > 0:
            return False
    return True

def _find_path(idStream: str, videoId: str) -> int:
    number_map = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    }
    for each in videoId:
        each = int(each)
        number_map[each] = number_map[each] + 1
    
    each_id = list(idStream)
    n = len(each_id)
    res = -1
    for each in range(n):
        index = int(each_id[each])
        number_map[index] = number_map[index] - 1
        if _check_if_all_zero(number_map):
            res = each + 1
            break

    return res

def solve(idStream: str, videoIds: list[str]) -> list[int]:
    res = []

    for videoId in videoIds:
        res.append(_find_path(idStream, videoId))
    return res


idStream= "064819848398"
videoIds =["088", "364", "07", "98"]

res = solve(idStream, videoIds)
print(res)