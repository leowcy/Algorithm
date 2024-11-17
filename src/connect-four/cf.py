class ConnectFour:
    def __init__(self):
        self.rows = 6
        self.cols = 7
        self.board = [[" " for _ in range(self.cols)] for _ in range(self.rows)]
        self.current_player = "X"

    def display_board(self):
        print("\n  " + "   ".join(map(str, range(self.cols))))
        for row in self.board:
            print(" | ".join(row))
            print("-" * (self.cols * 4 - 1))
        print("\n")

    def drop_piece(self, col):
        for row in reversed(self.board):
            if row[col] == " ":
                row[col] = self.current_player
                return True
        return False

    def is_valid_move(self, col):
        return 0 <= col < self.cols and self.board[0][col] == " "

    def check_winner(self):
        def check_direction(start_row, start_col, delta_row, delta_col):
            count = 0
            row, col = start_row, start_col
            while 0 <= row < self.rows and 0 <= col < self.cols:
                if self.board[row][col] == self.current_player:
                    count += 1
                    if count == 4:
                        return True
                else:
                    count = 0
                row += delta_row
                col += delta_col
            return False

        # Check horizontal, vertical, and diagonal directions
        for r in range(self.rows):
            for c in range(self.cols):
                if (check_direction(r, c, 0, 1) or  # Horizontal
                        check_direction(r, c, 1, 0) or  # Vertical
                        check_direction(r, c, 1, 1) or  # Diagonal /
                        check_direction(r, c, 1, -1)):  # Diagonal \
                    return True
        return False

    def is_draw(self):
        return all(self.board[0][col] != " " for col in range(self.cols))

    def switch_player(self):
        self.current_player = "O" if self.current_player == "X" else "X"

    def play(self):
        print("Welcome to Connect Four!")
        self.display_board()

        while True:
            try:
                col = int(input(f"Player {self.current_player}, choose a column (0-{self.cols - 1}): "))
                if self.is_valid_move(col):
                    self.drop_piece(col)
                    self.display_board()
                    if self.check_winner():
                        print(f"Player {self.current_player} wins!")
                        break
                    if self.is_draw():
                        print("It's a draw!")
                        break
                    self.switch_player()
                else:
                    print("Invalid move. Try again.")
            except ValueError:
                print("Please enter a valid column number.")
        print("Game over!")


if __name__ == "__main__":
    game = ConnectFour()
    game.play()
