import { useContext } from 'react';
import { useLayer } from '../hooks/useLayer';
import styles from '../styles/styles.module.css'
import { MainContainerContext } from './MainContainer';


export const LayerViewEdit = () => {

    const { isMouseDown, isMouseUp , updateLayers, showBorders} = useContext(MainContainerContext);
    const { tilesData } = useLayer();

    return (
        <div
            className={styles.container}
        >
            {tilesData.map((tile, index) => (
                <div
                    onMouseDown={() => updateLayers(index, tile)}
                    onMouseEnter={() => {
                        isMouseDown && updateLayers(index, tile)
                    }}
                    onClick={() =>  updateLayers(index, tile)}
                   // style={{ backgroundColor: tile.selected ? tile.color : 'transparent' }}
                    key={index}
                    className={` ${showBorders && styles.tile}` }
                />
            ))}
        </div>
    )
}
