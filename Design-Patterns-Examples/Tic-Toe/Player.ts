import { Pieces } from "./constant";

class Player {
    private name: string;
    private piece: Pieces;

    constructor(name: string, piece: Pieces) {
        this.name = name;
        this.piece = piece;
    }

    public getName(): string {
        return this.name;
    }

    public getPiece(): Pieces {
        return this.piece;
    }
}