import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from '../../assets/Piece=Bishop, Side=Black.svg'
import whiteLogo from '../../assets/Piece=Bishop, Side=White.svg'

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }
        if(this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}