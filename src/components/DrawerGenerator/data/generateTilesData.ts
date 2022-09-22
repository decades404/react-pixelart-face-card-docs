import { TileInput } from '../interfaces/interfaces';

const ROWS = 25;
const COLUMNS = 25;

const TOTAL_DIVS = ROWS * COLUMNS;

const dataLength = TOTAL_DIVS;

export const generateTilesData = () => {

    const tilesData: TileInput[] = [];

    let actualRow = 1;
    let actualColumn = 0;

    Array.from(Array(dataLength).keys()).map((i) => {

        if(actualRow == (ROWS +1) ){
            actualColumn = actualColumn + 1;
            actualRow = 1;
        }


        const item :TileInput = {
            x: actualRow,
            y: actualColumn
        }
        tilesData.push(item);

        actualRow++;

    })

    console.log("tilesData", tilesData)
    return tilesData;
}