import { useState } from "react"
import { itemsData, skinTonesData } from "react-pixelart-face-card";
import { getRandomValue } from "../../../utils/getRandomValue";
import { INITIAL_GENERATOR_DATA } from "../data/faceGeneratorData";



export const useFaceGenerator = () => {
    
    const [options, setOptions] = useState(INITIAL_GENERATOR_DATA);
    const [faceSkin, setFaceSkin] = useState(skinTonesData[getRandomValue(skinTonesData.length-1)]);
    const [ generatedCode, setGeneratedCode] = useState('');

    const changeItemValue = (option: any, isNext: boolean) => {

        const _option = options[option]

        const _itemsData = itemsData as any;

        const optionsKeys = Object.keys(_itemsData[option]);
        console.log("option", option)
        console.log("optionsKeys", optionsKeys)
        let newValue = '';

        optionsKeys.map( (key, i) => {
            if(key == _option.value){
                if(isNext){
                    if(optionsKeys[i+1]){
                        newValue = optionsKeys[i+1];
                    }
                    else {
                        newValue = optionsKeys[0];
                    }
                }
                else {
                    if(optionsKeys[i-1]){
                        newValue = optionsKeys[i-1];
                    }
                    else {
                        newValue = optionsKeys[optionsKeys.length-1];
                    }
                } 
            }
        })
        _option.value = newValue;
        setOptions({...options, [option]: { ..._option } })
    }

    const changeItemColor = (option: string, value: string) => {
        console.log("option", option)
        const _option = options[option]
        _option.color = value;
        setOptions({...options, [option]: { ..._option } })



        setTimeout(() => {
            console.log("options", options);
        }, 3000);
    }

    const changeFaceSkin = (skin: string) => {
        setFaceSkin(skin);
    }

    const generateCode = () => {
        setGeneratedCode('');

        let newGeneratedCode = `<PixelArtCard size={350} color={'${faceSkin}'}>
        `;

        Object.entries(options).map( ([key,item]) => {
            const _item: any = item;
            newGeneratedCode += `<PixelArtCard.${_item.componentId} value={'${_item.value}'} ${_item.color!= '' ? `color={'${_item.color}'} ` : ''}/>
        `
        });

        newGeneratedCode+= `
    </PixelArtCard>`
        setGeneratedCode(newGeneratedCode)

    }
    return {
        generatedCode,
        generateCode,
        options,
        faceSkin,
        changeFaceSkin,
        changeItemValue,
        changeItemColor
    }
}