'''
We are building a word processor and we would like to implement a "reflow" functionality that also applies full justification to the text.

Given an array containing lines of text and a new maximum width, re-flow the text to fit the new width. Each line should have the exact specified width. If any line is too short, insert '-' (as stand-ins for spaces) between words as equally as possible until it fits.

Note: we are using '-' instead of spaces between words to make testing and visual verification of the results easier.


lines = [ "The day began as still as the",
          "night abruptly lighted with",
          "brilliant flame" ]

reflowAndJustify(lines, 24) "reflow lines and justify to length 24" =>

        [ "The--day--began-as-still",
          "as--the--night--abruptly",
          "lighted--with--brilliant",
          "flame" ] // <--- a single word on a line is not padded with spaces

reflowAndJustify(lines, 25) "reflow lines and justify to length 25" =>

        [ "The-day-began-as-still-as"
          "the-----night----abruptly"
          "lighted---with--brilliant"
          "flame" ]

reflowAndJustify(lines, 26) "reflow lines and justify to length 26" =>

        [ "The--day-began-as-still-as",
          "the-night-abruptly-lighted",
          "with----brilliant----flame" ]

reflowAndJustify(lines, 40) "reflow lines and justify to length 40" =>

        [ "The--day--began--as--still--as-the-night",
          "abruptly--lighted--with--brilliant-flame" ]

reflowAndJustify(lines, 14) "reflow lines and justify to length 14" =>

        ['The--day-began',
         'as---still--as',
         'the------night',
         'abruptly',
         'lighted---with',
         'brilliant',
         'flame']

reflowAndJustify(lines, 15) "reflow lines and justify to length 15" =>

        ['The--day--began',
         'as-still-as-the',
         'night--abruptly',
         'lighted----with',
         'brilliant-flame']

lines2 = [ "a b", "c d" ]         

reflowAndJustify(lines2, 20) "reflow lines2 and justify to length 20" =>

        ['a------b-----c-----d']

reflowAndJustify(lines2, 4) "reflow lines2 and justify to length 4" =>

        ['a--b',
         'c--d']


reflowAndJustify(lines2, 2) "reflow lines2 and justify to length 2" =>

        ['a',
         'b',
         'c',
         'd']

All Test Cases:
                 lines, reflow width
reflowAndJustify(lines, 24)
reflowAndJustify(lines, 25)
reflowAndJustify(lines, 26)
reflowAndJustify(lines, 40)
reflowAndJustify(lines, 14)
reflowAndJustify(lines, 15)
reflowAndJustify(lines2, 20)
reflowAndJustify(lines2, 4)
reflowAndJustify(lines2, 2)

n = number of words OR total characters
'''

lines = ["The day began as still as the","night abruptly lighted with","brilliant flame"]
lines2 = ["a b","c d"]

def reflowAndJustify(lines: list[str], line_len: int):
    # first prepartion for the lines data
    words = []
    for each in lines:
        each_split_by_space = each.split(" ")
        # print(each_split_by_space)
        words += each_split_by_space
        
    ans = []
    temp_length = 0
    temp_res = ""
    i = 0
    
    # Step 1: put the as many words into one line
    while i < len(words):
        if temp_length == 0:
            temp_length += len(words[i])
        else:
            temp_length += len(words[i]) + 1
        
        if temp_length <= line_len:
            if len(temp_res) == 0:
                temp_res += words[i]
            else:
                temp_res += "-"+words[i]
            if i == len(words)-1:
                ans.append(temp_res)
            i += 1
        else:
            ans.append(temp_res)
            temp_length = 0
            temp_res = ""
        
    # Step 2: Keep adding missing dash to meet the line temp_length
    for i, each in enumerate(ans):
        if "-" not in each or len(each) == line_len:
            continue
        else:
            text_list = list(each)
            dash_positions = [i for i, char in enumerate(text_list) if char == "-"]
            # print(text_list)
            # print(dash_positions)
            while len(text_list) < line_len:
                for pos in dash_positions:
                    text_list.insert(pos, "-")
                    print(text_list)
                    dash_positions = [p + 1 if p >= pos else p for p in dash_positions]
                    print(dash_positions)
                    
                    if len(text_list) >= line_len:
                        break
            ans[i] = "".join(text_list)

    return ans
    
print(reflowAndJustify(lines, 14))