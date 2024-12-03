def create_multipliers():
    return [lambda x, i=i: x * i for i in range(5)]

# late binding

multipliers = create_multipliers()
# print(multipliers)
results = [m(2) for m in multipliers]
# expect i above be 0,1,2,3,4 -> but actually getting 4,4,4,4,4
print(results)  # Expected: [0, 2, 4, 6, 8], Output: [8, 8, 8, 8, 8]


# @rate_limit(input)
# def create_item():


# def wrapper():
#     pass


# def logger_function():

#     logger.debug()

#     wrapper()

#     logger.error()

