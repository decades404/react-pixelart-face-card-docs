import React, { useContext } from 'react'
import { skinTonesData } from 'react-pixelart-face-card';
import { colorsData } from '../data/colorsData'
import { useColorPicker } from '../hooks/useColorPicker'
import styles from '../styles/colorpicker.module.css'
import { MainContainerContext } from './MainContainer';

export const ColorPicker = () => {

    const { selectedColor, changeColor, selectedDrawOption, changeDrawOption, selectedSkinTone, changeSkinTone } = useContext(MainContainerContext);

    return (
        <div className='w-96 px-10 '>

            <p>Skin tone</p>

            <div className='flex flex-wrap '>
                {
                    skinTonesData.map(color => (
                        <div
                            onClick={() => changeSkinTone(color)}
                            className={`cursor-pointer w-5 h-5 m-0.5  ${selectedSkinTone == color && 'border-4 border-slate-900'}`}
                            style={{ backgroundColor: color }}></div>
                    ))
                }
            </div>


            <p>Paint Color</p>

            <div className='flex flex-wrap '>
                {
                    colorsData.map(color => (
                        <div
                            onClick={() => changeColor(color)}
                            className={`cursor-pointer w-5 h-5 m-0.5  ${selectedColor == color && 'border-4 border-slate-900'}`}
                            style={{ backgroundColor: color }}></div>
                    ))
                }
            </div>

            <div>

                <button
                    onClick={() => changeDrawOption(0)}
                    className={`btn m-2  ${selectedDrawOption == 0 ? '' : 'btn-outline'} `}>PAINT</button>
                <button
                    onClick={() => changeDrawOption(1)}
                    className={`btn m-2  ${selectedDrawOption == 1 ? '' : 'btn-outline'} `}>ERASE</button>

            </div>
        </div>
    )
}
