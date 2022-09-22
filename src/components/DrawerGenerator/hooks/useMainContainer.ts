import { MouseEventHandler, useState } from "react"
import { colorsData, skinTonesData } from "../data/colorsData";



export const useMainContainer = () => {

    const [ isMouseDown, setIsMouseDown] = useState(false);
    const [ isMouseUp, setIsMouseUp] = useState(false);
    const [ selectedColor, setSelectedColor ] = useState<string>(colorsData[0]);
    const [ selectedSkinTone, setSelectedSkinTone ] = useState<string>(skinTonesData[0]);
    const [ selectedDrawOption, setSelectedDrawOption] = useState(0);

    const [ isAnimating, setIsAnimating] = useState(false);

    const changeColor = (color: string) => {
        setSelectedColor(color);
    }
    const changeSkinTone = (color: string) => {
        setSelectedSkinTone(color);
    }

    const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseDown(true);
        setIsMouseUp(false);
    }

    const onMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseDown(false);
        setIsMouseUp(true);
    }

    const changeDrawOption = (i: number) => {
        setSelectedDrawOption(i);
    }

    return {
        isMouseDown,
        isMouseUp,
        onMouseDown,
        onMouseUp,
        selectedColor,
        changeColor,
        isAnimating,
        selectedDrawOption,
        changeDrawOption,
        selectedSkinTone,
        changeSkinTone
    }
}