import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card';

export const MMOGirlCardCode =
`
    <div style={{ marginLeft: 10, display: 'flex', alignContent: 'center', alignItems: 'center' }}>

        <div style={{ width: 150, height: 150, backgroundColor: '#fb923c', borderRadius: '50%', zIndex: 2, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <PixelArtCard random={true} size={100} tags={['human-female']} style={{ margin: '0 auto' }} />
        </div>

        <div style={{ width: 200, paddingBottom: 15, paddingTop: 15, backgroundColor: '#475569', left: 100, marginLeft: -32 }}>
            <div style={{ marginLeft: 40, alignItems: 'center', alignContent: 'center', textAlign: 'center', color: 'white' }}
            >
                <div>MMO Girl</div>
                <div style={{ width: '90%', padding: 8, backgroundColor: '#22c55e', fontSize: 12 }}>100/100</div>
                <div style={{ width: '90%', padding: 8, backgroundColor: '#2563eb', fontSize: 12 }}>100/100</div>
            </div>
        </div>


    </div>
`   
export const MMOGirlCard = () => {
    return (

        <div style={{ marginLeft: 10, display: 'flex', alignContent: 'center', alignItems: 'center' }}>

            <div style={{ width: 150, height: 150, backgroundColor: '#fb923c', borderRadius: '50%', zIndex: 2, display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                <PixelArtCard random={true} size={100} tags={['human-female']} style={{ margin: '0 auto' }} />
            </div>

            <div style={{ width: 200, paddingBottom: 15, paddingTop: 15, backgroundColor: '#475569', left: 100, marginLeft: -32 }}>
                <div style={{ marginLeft: 40, alignItems: 'center', alignContent: 'center', textAlign: 'center', color: 'white' }}
                >
                    <div>MMO Girl</div>
                    <div style={{ width: '90%', padding: 8, backgroundColor: '#22c55e', fontSize: 12 }}>100/100</div>
                    <div style={{ width: '90%', padding: 8, backgroundColor: '#2563eb', fontSize: 12 }}>100/100</div>
                </div>
            </div>


        </div>

    )
}
