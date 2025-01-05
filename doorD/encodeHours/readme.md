### Description
We want to experiment to improve the performance of fetching open stores by converting the operating hours into encoded tokens which would be of fixed length of 5. The first digit would represent the day, the next 4 digits would represent the hours in 24 hours format.

Monday maps to number 1, Tuesday to number 2 and so on.

Ex: Monday, 10:00am transforms to 11000 Ex: Monday, 2:00pm transforms to 11400 (as 2pm -> 14:00 in 24 hr format)

Write a function that takes in a start_time and end_time and gives‍‍‍‍‍‌‍‌‍‍‌‌‌‍‍‍‌‌‍ back a list of encoded tokens. Ensure you validate the input Note: We round up the time to next 5 mins

Ex: Input: ("mon 10:00 am", "mon 11:00 am")
Output: [“11000”, “11005”, “11010”, “11015”, “11020”, “11025”, “11030”, “11035”, “11040”, “11045”, “11050”, “11055”, “11100”]

Input: ("mon 10:15 am", "mon 11:00 am") Output: [“11015”, “11020”, “11025”, “11030”, “11035”, “11040”, “11045”, “11050”, “11055”, “11100”]
