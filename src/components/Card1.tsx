import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card'

export const Card1Code =
`
    <div style={{ width: 400, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>+100 Contributors:</div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <div>
                <PixelArtCard random={true} size={120} tags={['human-male']} hoverColor='#84cc16'>
                    <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                </PixelArtCard>
                <p>@Jorge</p>
            </div>
            <div>
                <PixelArtCard random={true} size={120} tags={['human-male']} hoverColor='#84cc16'>
                    <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                </PixelArtCard>
                <p>@Andrew</p>
            </div>
            <div>
                <PixelArtCard random={true} size={120} tags={['human-female']} hoverColor='#84cc16'>
                    <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                </PixelArtCard>
                <p>@Andrea</p>
            </div>
        </div>

    </div>
`
export const Card1 = () => {

    return (
        <div style={{ width: 400, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <div style={{ fontWeight: 'bold', fontSize: 18 }}>+100 Contributors:</div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <div>
                    <PixelArtCard random={true} size={120} tags={['human-male']} hoverColor='#84cc16'>
                        <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                    </PixelArtCard>
                    <p>@Jorge</p>
                </div>
                <div>
                    <PixelArtCard random={true} size={120} tags={['human-male']} hoverColor='#84cc16'>
                        <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                    </PixelArtCard>
                    <p>@Andrew</p>
                </div>
                <div>
                    <PixelArtCard random={true} size={120} tags={['human-female']} hoverColor='#84cc16'>
                        <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-5' />
                    </PixelArtCard>
                    <p>@Andrea</p>
                </div>
            </div>

        </div>
    )
}
