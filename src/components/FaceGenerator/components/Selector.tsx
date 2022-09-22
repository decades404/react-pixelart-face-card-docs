import React, { useContext } from 'react'
import { FaceGeneratorContext } from '../FaceGenerator';
import { ColorSelector } from './ColorSelector';

interface Props {
    id: string;
    item: any;
}

export const Selector = ({ id, item }: Props) => {

    const { changeItemValue, changeItemColor, options } = useContext(FaceGeneratorContext);
    return (
        <div
            className=' '>
            <div className='bg-violet-600  p-2 text-white'>
                <p className='text-xs font-bold text-center'>{options[id].componentId}</p>
            </div>

            <div className=' bg-white border-2 border-indigo-600'>
                <div className='flex'>
                    <button
                        onClick={() => changeItemValue(id, false)}
                        className="btn btn-square m-2">{'<'}</button>
                    <div className='text-center self-center w-4/5'>{options[id].value}</div>
                    <button
                        onClick={() => changeItemValue(id, true)}
                        className="btn btn-square m-2">{'>'}</button>

                </div>

                {!options[id].oneColor && 
                
                <div className='flex p-2 w-full'>
                    
                    <ColorSelector
                        id={id}
                        key={id}
                        selectedColor={options[id].color}
                        onColorChange={(color: string) => changeItemColor(id, color)}
                    />
                </div>
                }
            </div>
        </div>
    )
}
