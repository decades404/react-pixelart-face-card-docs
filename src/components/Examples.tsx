import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card'
import { Card1, Card1Code } from './Card1';
import { Card2, Card2Code } from './Card2';
import { Card3, Card3Code } from './Card3';
import { ExampleContainer } from './ExampleContainer/ExampleContainer';
import { MMOBoyCard, MMOBoyCardCode } from './MMOBoyCard';
import { MMOGirlCard, MMOGirlCardCode } from './MMOGirlCard'
import { NFTCard, NFTCardCode } from './NFTCard'
import { TitleText } from './TitleText';
import { YoutubeCard, YoutubeCardCode } from './YoutubeCard'

export const Examples = () => {
    return (
        <div>
            <TitleText value='EXAMPLES '/>
            <div className="flex flex-wrap p-6   justify-center bg-indigo-200">
                <ExampleContainer code={NFTCardCode}>
                    <NFTCard />
                </ExampleContainer>

                <ExampleContainer code={YoutubeCardCode}>
                    <YoutubeCard />
                </ExampleContainer>

                <ExampleContainer code={MMOBoyCardCode}>
                    <MMOBoyCard />
                </ExampleContainer>
                <ExampleContainer code={MMOGirlCardCode}>
                    <MMOGirlCard />
                </ExampleContainer>
                <ExampleContainer code={Card1Code}>
                    <Card1/>
                </ExampleContainer>
                <ExampleContainer code={Card2Code}>
                    <Card2/>
                </ExampleContainer>

                <ExampleContainer code={Card3Code}>
                    <Card3/>
                </ExampleContainer>            
            </div>
        </div>
    )
}
