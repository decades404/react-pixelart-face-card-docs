import React, { useContext } from 'react'
import { FaceGeneratorContext } from '../FaceGenerator';
import { ColorSelector } from './ColorSelector';
import { SkinSelector } from './SkinSelector';

interface Props {
    id: string;
}

export const FaceSelector = ({ id}: Props) => {

    const { changeItemValue, changeItemColor, options } = useContext(FaceGeneratorContext);
    return (
        <div
            className=' '>
            <div className='bg-violet-600  p-2 text-white'>
                <p className='text-xs font-bold text-center'>Face</p>
            </div>

            <div className=' bg-white border-2 border-indigo-600'>
              

                <div className='flex p-2 w-full'>
                    
                    <SkinSelector />
                </div>
                
            </div>
        </div>
    )
}
