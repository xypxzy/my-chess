import {Cell} from "../models/Cell.ts";
import {FC} from "react";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell , selected, click }) => {

    return (
        <div
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => click(cell)}
            style={{
                background: cell.available && cell.figure ? 'var(--selected-bg)' : ''
            }}
        >
            {
                !cell.figure && cell.available && (
                    <div className='available'/>
                )
            }
            {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
        </div>
    )
}

export default CellComponent;