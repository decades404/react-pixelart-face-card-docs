import React from 'react'
import { itemsData, PixelArtCard } from 'react-pixelart-face-card';
import { TitleText } from '../TitleText';
import { useFaceGenerator } from './hooks/useFaceGenerator';
import { createContext } from 'react';
import { Selector } from './components/Selector';
import { FaceSelector } from './components/FaceSelector';
import { GenerateCode } from './components/GenerateCode';



interface ContextProps {
    faceSkin: string;
    generatedCode: string;
    generateCode: () => void;
    changeFaceSkin: (value: string) => void;
    changeItemValue: (option: string, isNext: boolean) => void;
    changeItemColor: (option: string, value: string) => void;
    options: any
}

export const FaceGeneratorContext = createContext({} as ContextProps);
const { Provider } = FaceGeneratorContext;


export const FaceGenerator = () => {

    const { options, changeItemValue, changeItemColor, faceSkin, changeFaceSkin, generatedCode, generateCode } = useFaceGenerator();

    return (
        <Provider
            value={{
                generatedCode,
                generateCode,
                faceSkin,
                changeFaceSkin,
                changeItemValue,
                changeItemColor,
                options
            }}>
            <div>

                <TitleText value="FACE GENERATOR" />

                <div className='flex flex-wrap justify-center font-press text-xs' >
                    <div className='bg-gradient-to-r from-indigo-400 to-blue-500 flex items-center justify-center border-4 border-indigo-600'>
                        <PixelArtCard size={350}  hover={false} color={faceSkin}>
                            <PixelArtCard.Hair color={options.hair.color} value={options.hair.value} />
                            <PixelArtCard.HeadAccessory color={options.headAccessory.color} value={options.headAccessory.value} />
                            <PixelArtCard.Eyes color={options.eyes.color} value={options.eyes.value} />
                            <PixelArtCard.EyesAccessory color={options.eyesAccessory.color} value={options.eyesAccessory.value} />
                            <PixelArtCard.EarAccessory color={options.earAccessory.color} value={options.earAccessory.value} />
                            <PixelArtCard.Nose color={options.nose.color} value={options.nose.value} />
                            <PixelArtCard.Beard color={options.beard.color} value={options.beard.value} />
                            <PixelArtCard.Mouth color={options.mouth.color} value={options.mouth.value} />
                            <PixelArtCard.MouthAccessory color={options.mouthAccessory.color} value={options.mouthAccessory.value} />
                            <PixelArtCard.NeckAccessory color={options.neckAccessory.color} value={options.neckAccessory.value} />
                        </PixelArtCard>
                    </div>

                    <div>
                        <div className='grid grid-cols-3 gap-6 m-4'>
                            {
                                Object.entries(itemsData).map(([key, item]) => {
                                    return (
                                        <Selector id={key} item={item} />

                                    )
                                })
                            }
                            <FaceSelector id='face' key='face'/>

                        </div>
                        <div className='flex items-center justify-center'>
                        <GenerateCode/>
                        </div>
                       
                    </div>
                </div>
         

            </div>
        </Provider>
    )
}
