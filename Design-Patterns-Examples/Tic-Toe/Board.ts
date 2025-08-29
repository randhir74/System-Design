import { Pieces } from "./constant";

class Board {
    private board: Pieces[][];
    private isWinner: boolean = false;

    constructor() {
        this.board = [
            [Pieces.EMPTY, Pieces.EMPTY, Pieces.EMPTY],
            [Pieces.EMPTY, Pieces.EMPTY, Pieces.EMPTY],
            [Pieces.EMPTY, Pieces.EMPTY, Pieces.EMPTY],
        ];
    }

    public getBoard(): Pieces[][] {
        return this.board;
    }

    public printBoard(): void {
        for(let i = 0; i< this.board.length; i++) {
            for(let j = 0; j< this.board[i].length; j++) {
                console.log(this.board[i][j]);
            }
            console.log("\n");
        }
    }

    public makeMove(row: number, col: number, piece: Pieces): void {
        this.board[row][col] = piece;
    }

    public isBoardFull(): boolean {
        for(let i = 0; i< this.board.length; i++) {
            for(let j = 0; j< this.board[i].length; j++) {
                if(this.board[i][j] === Pieces.EMPTY) {
                    return false;
                }
            }
        }
        return true;
    }

    public checkWinner(): boolean {
        for(let i = 0; i< this.board.length; i++) {
            for(let j = 0; j< this.board[i].length; j++) {
                if(this.board[i][j] === Pieces.EMPTY) {
                    return false;
                }
            }
        }
        return true;
    }
}