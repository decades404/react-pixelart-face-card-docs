import { useContext, useEffect, useState } from "react"
import { generateTilesData } from '../data/generateTilesData';
import { TileInput } from "../interfaces/interfaces";
import { useLayer } from "./useLayer";
import { MainContainerContext } from '../components/MainContainer';

export interface LayerProps {
    order: number;
    animationName?: string;
    data: { [key: string]: TileInput  }
}

const ROWS = 20;
const COLUMNS = 20;

const TOTAL_DIVS = ROWS * COLUMNS;

interface useLayerContainerArgs {
    selectedColor: string;
    selectedDrawOption: number;
    selectedSkinTone: string;
}

export const useLayerContainer = ({selectedColor, selectedDrawOption, selectedSkinTone}: useLayerContainerArgs) => {

    const [layers, setLayers] = useState<{ [key: string]: LayerProps }>({
        '0': {
            order: 0,
            data: {}
        }
    })

    const [showBorders, setShowBorders] = useState<boolean>(true);

    const [selectedLayer, setSelectedLayer] = useState('0')

    const [ generatedCode, setGeneratedCode ] = useState('');


    const addLayer = () => {

        const id = Math.floor(Math.random() * Date.now()).toString();

        const lastEntry = Object.entries(layers).length;

        let maxOrder = lastEntry
        Object.entries(layers).map(([key, layer]) => {
            if (layer.order > maxOrder) {
                maxOrder = layer.order;
            }
        })
        console.log("layers", layers)
        setLayers({ 
            ...layers, 
            [id]: { 
                order: maxOrder + 1 ,
                data: {}
            } 
        })
        setSelectedLayer(id);
    }

    const removeLayer = (id: string) => {

        const { [id]: toDelete, ...rest } = {...layers};
        setLayers({...rest})
        const layersKeys = Object.keys(rest);
        setSelectedLayer(layersKeys[layersKeys.length - 1]);
    }
    const selectLayer = (id: string) => {
        setSelectedLayer(id)
    }

    const changeOrder = (id: string, value: number) => {
        setLayers(oldLayers => ({
            ...oldLayers,
            [id]: { ...oldLayers[id], order: value }
        }))
    }

    const updateLayers = (i: number, tile: TileInput) => {
        const newTile = {...layers[selectedLayer]};
        newTile.data[i]  =  { 
            ...tile,
            color: selectedColor
        }

        if(selectedDrawOption == 1){
            delete newTile.data[i];
        }
        setLayers({
            ...layers,
            [selectedLayer]: {
                ...newTile
            }
        })
    }

    const changeBorders = (value: boolean) => {
        setShowBorders(value)
    }

    const generate = () => {
        console.log("generate!", layers);

        setGeneratedCode('');

        let newGeneratedCode = `<PixelArtCard size={200} color={'${selectedSkinTone}'}>
        `;

        Object.entries(layers).map(([key, layer]) => {

            let boxShadow = '';
            const _length = Object.keys(layer.data).length;
            let actualI = 0;
            Object.entries(layer.data).map(([key, dataItem]) => {
                if(actualI == _length - 1){
                    boxShadow += `${dataItem.x}em ${dataItem.y}em ${dataItem.color} `
                }
                else {
                    boxShadow += `${dataItem.x}em ${dataItem.y}em ${dataItem.color}, `
                }
            
                actualI++;
              
            })

            const layerObject = `<Layer data={'${boxShadow}'} />
        ` 

            newGeneratedCode+= layerObject;
        }); 
        newGeneratedCode+= `
 </PixelArtCard>`

        setGeneratedCode(newGeneratedCode)

    }

    useEffect( ()=> {
        console.log("layersChanged", layers)
      
      
    }, [layers])

    return {
        layers,
        selectedLayer,
        showBorders,
        setLayers,
        addLayer,
        removeLayer,
        selectLayer,
        changeOrder,
        updateLayers,
        changeBorders,
        generate,
        generatedCode
    }
}