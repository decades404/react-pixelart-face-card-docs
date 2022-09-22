import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card'

export const Card2Code =
`
    <div style={{ width: 500, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>Rare Cards!</div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <div>
                <PixelArtCard random={true} size={120} color='blue' hoverColor='black'>
                    <PixelArtCard.Hair value='hair-16' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                </PixelArtCard>

            </div>
            <div>
                <PixelArtCard random={true} size={120} color='red' hoverColor='black'>
                    <PixelArtCard.Hair value='hair-16' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                </PixelArtCard>

            </div>
            <div>
                <PixelArtCard random={true} size={120} color='green' hoverColor='black'>
                    <PixelArtCard.Hair value='hair-16' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                </PixelArtCard>

            </div>
        </div>

    </div>
`

export const Card2 = () => {
    return (
        <div style={{ width: 500, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <div style={{ fontWeight: 'bold', fontSize: 18 }}>Rare Cards!</div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <div>
                    <PixelArtCard random={true} size={120} color='blue' hoverColor='black'>
                        <PixelArtCard.Hair value='hair-16' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                    </PixelArtCard>

                </div>
                <div>
                    <PixelArtCard random={true} size={120} color='red' hoverColor='black'>
                        <PixelArtCard.Hair value='hair-16' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                    </PixelArtCard>

                </div>
                <div>
                    <PixelArtCard random={true} size={120} color='green' hoverColor='black'>
                        <PixelArtCard.Hair value='hair-16' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-7' />
                    </PixelArtCard>

                </div>
            </div>

        </div>
    )
}
