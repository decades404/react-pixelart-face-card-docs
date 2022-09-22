import { LayerButton } from "./LayerButton"
import { LayerEdit } from './LayerEdit';
import styles from '../styles/layer.module.css'
import { useContext } from 'react';
import { MainContainerContext } from './MainContainer';
import { CodeContainer } from "./CodeContainer";

export const LayerContainer = () => {

  const { layers, selectedLayer, selectLayer, removeLayer, changeOrder, addLayer, showBorders, changeBorders, generate } = useContext(MainContainerContext)

  return (
    <div className=' h-96 px-10'>


      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Show borders</span>
          <input type="checkbox" checked={showBorders} onChange={(e) => changeBorders(e.target.checked)} className="checkbox" />

        </label>
      </div>
      <div className="max-h-72 overflow-y-scroll overflow-x-hidden">
        {
          Object.entries(layers).map(([key, layer], index) => (
            <LayerEdit
              id={index.toString()}
              layer={layer}
              key={key}
              selected={key === selectedLayer}
              onClick={() => selectLayer(key)}
              onClickDelete={() => removeLayer(key)}
              onChangeOrder={(e) => changeOrder(key, e.target.valueAsNumber)}
              showDeleteButton={Object.entries(layers).length >= 2 ? true : false}
            />
          ))
        }
      </div>

      <button
        onClick={() => addLayer()}
        className="btn m-5">+ Add Layer</button>


      <label 
        onClick={() => generate()}
      htmlFor="my-modal-4" className="btn modal-button">GENERATE</label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box w-11/12 max-w-5xl relative" >
         <CodeContainer/>
        </label>
      </label>
     


    </div>
  )
}
