import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/Piece=Rook, Side=Black.svg";
import whiteLogo from "../../assets/Piece=Rook, Side=White.svg";

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }
        if(this.cell.isEmptyVertical(target)) {
            return true
        }
        if(this.cell.isEmptyHorizontal(target)) {
            return true
        }
        return false
    }
}