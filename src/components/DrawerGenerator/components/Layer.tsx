import { useContext, useRef, useEffect } from 'react';
import { useLayer } from '../hooks/useLayer';
import { LayerProps } from '../hooks/useLayerContainer';
import { TileInput } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import { MainContainerContext } from './MainContainer';


interface Props {
    id: string; 
    data: { [key: string]: TileInput  }
    animate? : boolean
   
}
export const Layer = ({ data, id }: Props) => {

    const { tilesData, boxRef} = useLayer();


    return (
        <div
            ref={boxRef}
            className={styles.container}
        >
            {tilesData.map((tile, index) => (
                <div
                    style={data[index] && { 
                        backgroundColor:  data[index] ? data[index].color : 'transparent',        
                    }}
                    key={index}
                 
                />
            ))}
        </div>
    )
}
