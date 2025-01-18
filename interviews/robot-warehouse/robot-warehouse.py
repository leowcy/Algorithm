class RobotWarehouse:
    def move(self, input: str):
        command_map = {
            "N": [1, 0],
            "W": [0, -1],
            "E": [0, 1],
            "S": [-1, 0],
            "G": 1,
            "D": 0,
        }

        crates_location = [[0] * 10 for _ in range(10)]
        # 2 crates location below
        crates_location[4][4] = 1
        crates_location[0][9] = 1

        # default staring point is South West corner
        # starting_point = init_grid[9][0]
        staring_i, starting_j = 9, 0

        is_grabing = False

        input_split_by_space = input.split(" ") # getting a list of str of the direct

        for each in input_split_by_space:
            if each == "G":
                if not is_grabing and crates_location[staring_i][starting_j] == 1:
                    is_grabing = True
                    crates_location[staring_i][starting_j] = 0 # remove the crate
            elif each == "D":
                if is_grabing:
                    crates_location[staring_i][starting_j] = 1
                    is_grabing = False
            else:
                temp_direct = command_map.get(each)
                staring_i -= temp_direct[0]
                starting_j += temp_direct[1]
                if staring_i < 0 or staring_i > 9:
                    staring_i += temp_direct[0]
                if starting_j < 0 or starting_j > 9:
                    starting_j -= temp_direct[1]
            
        print(f"Final position of the robot: {staring_i}, {starting_j}")
        for i in range(len(crates_location)):
            for j in range(len(crates_location[0])):
                if crates_location[i][j] == 1:
                    print(f"The crate location: {i}, {j}")

robot_warehouse = RobotWarehouse()

# inputs = ["N E S W", "N E N E N E N E"]
# # Expected: 5 - 4
# for each in inputs:
#     print(robot_warehouse.move(each))

inputs_1 = "N E N E N E N E N G E D E"
# Expected output: ["4,6", "4,5"]
print(robot_warehouse.move(inputs_1))