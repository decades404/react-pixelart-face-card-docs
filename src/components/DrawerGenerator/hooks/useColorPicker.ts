import { useState } from 'react';
import { colorsData } from '../data/colorsData';

export const useColorPicker = () => {
    const [ selectedColor, setSelectedColor ] = useState<string>(colorsData[0]);

    const changeColor = (color: string) => {
        setSelectedColor(color);
    }

    return {
        selectedColor,
        changeColor
    }
}