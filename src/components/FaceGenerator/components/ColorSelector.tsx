import React from 'react'
import { colorsData } from '../../DrawerGenerator/data/colorsData';


interface Props {
    id: string;
    selectedColor: string
    onColorChange: (color: string) => void;

}
export const ColorSelector = ({selectedColor, onColorChange, id} : Props) => {
    return (

        <div className='w-full'>
            <label 
            htmlFor={"my-modal-" + id}
            style={{backgroundColor: selectedColor}}
            className="btn modal-button  rounded-md text-xs w-full">{selectedColor}</label>

            <input type="checkbox" id={"my-modal-" + id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={"my-modal-" + id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-xs">Select Color:</h3>

                    <div className='flex flex-wrap '>
                        {
                            colorsData.map(color => (
                                <label
                                htmlFor={"my-modal-" + id}
                                 onClick={() => {onColorChange(color) }}
                                    className={`cursor-pointer w-5 h-5 m-0.5  ${selectedColor == color && 'border-4 border-slate-900'}`}
                                    style={{ backgroundColor: color }}></label>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}
