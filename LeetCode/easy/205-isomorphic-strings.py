def isIsomorphic(s: str, t: str) -> bool:
    map1, map2 = [], []

    for i in s:
        map1.append(s.index(i))
    for j in t:
        map2.append(t.index(j))
    
    print(map1)
    print(map2)

    return map1 == map2
    
isIsomorphic("bbbaaaba", "aaabbbba")
# isIsomorphic("bbb", "aaa")