import { createContext } from 'react';
import { useMainContainer } from '../hooks/useMainContainer';
import styles from '../styles/styles.module.css'
import { ColorPicker } from './ColorPicker';
import { LayerContainer } from './LayerContainer';
import { LayerProps, useLayerContainer } from '../hooks/useLayerContainer';
import { Layer } from './Layer';
import { LayerViewEdit } from './LayerViewEdit';
import { TileInput } from '../interfaces/interfaces';

import { CodeContainer } from './CodeContainer';
import { faceData } from '../data/faceData';

export interface Props {
  children?: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties
}

interface ContextProps {
  isMouseUp: boolean;
  isMouseDown: boolean;
  selectedColor: string;
  selectedSkinTone: string;
  layers: { [key: string]: LayerProps; };
  selectedLayer: string;
  showBorders: boolean;
  generatedCode: string;
  selectedDrawOption: number;
  changeDrawOption: (i: number) => void;
  addLayer: () => void;
  updateLayers: (i: number, tile: TileInput) => void;
  removeLayer: (id: string) => void;
  selectLayer: (id: string) => void;
  changeOrder: (id: string, value: number) => void;
  changeColor: (color: string) => void;
  changeSkinTone: (color: string) => void;
  changeBorders: (value: boolean) => void;
  generate: () => void;
}

export const MainContainerContext = createContext({} as ContextProps);
const { Provider } = MainContainerContext;


export const MainContainer = ({ children, style }: Props) => {

  const { isMouseDown, isMouseUp, onMouseDown, onMouseUp, selectedColor, changeColor, selectedSkinTone, changeSkinTone,  isAnimating , selectedDrawOption, changeDrawOption} = useMainContainer();
  const { layers, selectedLayer, addLayer, removeLayer, selectLayer, changeOrder, updateLayers, showBorders, changeBorders, generate, generatedCode, } = useLayerContainer({ selectedColor, selectedDrawOption , selectedSkinTone});

  return (
    <Provider value={{
      isMouseUp,
      isMouseDown,
      selectedColor,
      generatedCode,
      changeColor,
      layers,
      updateLayers,
      selectedLayer,
      addLayer,
      removeLayer,
      selectLayer,
      changeOrder,
      showBorders,
      changeBorders,
      generate,
      selectedDrawOption,
      changeDrawOption,
      selectedSkinTone,
      changeSkinTone

    }}>
      <div className='flex flex-wrap justify-center'  >

        <ColorPicker />
        <div
          onMouseDown={(e) => onMouseDown(e)}
          onMouseUp={(e) => onMouseUp(e)}
          className='w-96 relative h-96'
          style={style}
        >
          {children}
          <Layer id='face' data={faceData(selectedSkinTone)}  />

          {
            Object.entries(layers).map(([key, layer]) => (
              <Layer
                id={key}
                key={key}
                data={layer.data}
              />
            ))
          }

          <LayerViewEdit />

        </div>
        <LayerContainer />
        {/*<CodeContainer /> */}
      </div>
    </Provider>
  )
}
