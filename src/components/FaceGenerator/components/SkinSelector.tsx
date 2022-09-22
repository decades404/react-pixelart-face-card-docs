import React from 'react'
import { colorsData, skinTonesData } from '../../DrawerGenerator/data/colorsData';
import { useContext } from 'react';
import { FaceGeneratorContext } from '../FaceGenerator';


interface Props {
    id?: string;
   

}
export const SkinSelector = ({  id = 'face'} : Props) => {

    const {faceSkin, changeFaceSkin} = useContext(FaceGeneratorContext);

    return (

        <div className='w-full'>
            <label 
            htmlFor={"my-modal-" + id}
            style={{backgroundColor: faceSkin}}
            className="btn modal-button  rounded-md text-xs w-full">{faceSkin}</label>

            <input type="checkbox" id={"my-modal-" + id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={"my-modal-" + id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" font-bold text-xs">Select Skin:</h3>

                    <div className='flex flex-wrap '>
                        {
                            skinTonesData.map(color => (
                                <label
                                htmlFor={"my-modal-" + id}
                                 onClick={() => {changeFaceSkin(color) }}
                                    className={`cursor-pointer w-5 h-5 m-0.5  ${faceSkin == color && 'border-4 border-slate-900'}`}
                                    style={{ backgroundColor: color }}></label>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}
