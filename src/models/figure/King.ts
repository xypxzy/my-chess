import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/Piece=King, Side=Black.svg";
import whiteLogo from "../../assets/Piece=King, Side=White.svg";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }
        if(this.cell.isEmptyVertical(target)){
            return true
        }
        return false
    }
}