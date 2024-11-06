def translate_absolute_path(input: str) -> str:
    input_split_by_slash = input.split("/")

    res = "/"
    previous_char_len = 0

    for i in range(1, len(input_split_by_slash)):
        if input_split_by_slash[i] == ".":
            continue # nothing happen for same level
        elif input_split_by_slash[i] == "..":
            end_index = len(res) - previous_char_len
            res = res[0:end_index]
        else:
            # for normal char
            previous_char_len = len(input_split_by_slash[i]) + 1
            res += input_split_by_slash[i] + "/"    
    return res[0:len(res)-1] if len(res) > 1 and res[-1] == "/" else res

input_list = [
    "/ab/cd/./ef",
    "/ab/cd/../ef",
    "/",
    "/.",
    "/ab/./../c" # one edge case I didn't cover in the test
]
for each in input_list:
    print(translate_absolute_path(each))

# TC: O(n)
# SC: O(1)