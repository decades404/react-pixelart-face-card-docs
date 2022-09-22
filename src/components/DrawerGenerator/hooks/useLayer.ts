import { useState, useContext, useCallback, useRef, useEffect } from 'react';
import { generateTilesData } from "../data/generateTilesData";
import { TileInput } from "../interfaces/interfaces";
import { MainContainerContext } from '../components/MainContainer';
import { LayerProps, useLayerContainer } from './useLayerContainer';

import { animationsData } from '../data/animationsData';

const data = generateTilesData()

export const useLayer = () => {

    const boxRef = useRef(null);

    const [ tilesData, setTilesData ] = useState(data);

    useEffect(() => {
    }, []);

    return {
        tilesData,
        boxRef,
     //   onClickTile
    }


}