import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card'

export const Card3Code =
`
    <div style={{ width: 500, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>My Teamwork: </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }} >
            <div>
                <PixelArtCard random={true} size={140} tags={['human-male']} hoverColor='#84cc16'>
                    <PixelArtCard.Beard />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                </PixelArtCard>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div>
                        <p>Richard</p>
                        <p style={{ fontWeight: 'bold' }}>CTO</p>
                    </div>
                </div>

            </div>
            <div>
                <PixelArtCard random={true} size={140} tags={['human-female']} hoverColor='#84cc16'>
                    <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                </PixelArtCard>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div>
                        <p>Olivia</p>
                        <p style={{ fontWeight: 'bold' }}>UX Designer</p>
                    </div>
                </div>
            </div>
            <div>
                <PixelArtCard random={true} size={140} tags={['human-male']} hoverColor='#84cc16'>
                    <PixelArtCard.Beard />
                    <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                </PixelArtCard>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div>
                        <p>Henry</p>
                        <p style={{ fontWeight: 'bold' }}>Developer</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
`

export const Card3 = () => {
    return (
        <div style={{ width: 500, backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <div style={{ fontWeight: 'bold', fontSize: 18 }}>My Teamwork: </div>

            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <div>
                    <PixelArtCard random={true} size={140} tags={['human-male']} hoverColor='#84cc16'>
                        <PixelArtCard.Beard />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                    </PixelArtCard>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div>
                            <p>Richard</p>
                            <p style={{ fontWeight: 'bold' }}>CTO</p>
                        </div>
                    </div>

                </div>
                <div>
                    <PixelArtCard random={true} size={140} tags={['human-female']} hoverColor='#84cc16'>
                        <PixelArtCard.HeadAccessory value='head-accessory-7' color='brown' />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                    </PixelArtCard>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div>
                            <p>Olivia</p>
                            <p style={{ fontWeight: 'bold' }}>UX Designer</p>
                        </div>
                    </div>
                </div>
                <div>
                    <PixelArtCard random={true} size={140} tags={['human-male']} hoverColor='#84cc16'>
                        <PixelArtCard.Beard />
                        <PixelArtCard.EyesAccessory value='eyes-accessory-10' />
                    </PixelArtCard>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <div>
                            <p>Henry</p>
                            <p style={{ fontWeight: 'bold' }}>Developer</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
