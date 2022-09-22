import React from 'react'
import { PixelArtCard } from 'react-pixelart-face-card'

export const YoutubeCardCode =
`
  <div style={{ margin: 5, display: 'flex', borderRadius: 10, height: 'fit-content', backgroundColor: 'white' }}>

    <div style={{ height: 250, width: 300, alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'relative', backgroundColor: '#475569' }}>

      <PixelArtCard random={true} tags={['human-male']} />
      <div style={{ height: 7, width: '100%', backgroundColor: 'red', position: 'absolute', bottom: 0 }}></div>
      <div style={{ right: 4, position: 'absolute', bottom: 10, backgroundColor: 'black', color: 'white' }}>1:49:51</div>
    </div>

    <div style={{ padding: 20 }}>
      <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 4 }}>Russian Doomer Music 1 Vol. 3</div>
      <div style={{ fontSize: 14, marginBottom: 4 }}>1.240.113 views - 1 Year ago</div>
      <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ width: 40, height: 40, backgroundColor: 'black' }}>
          <PixelArtCard random={true} tags={['human-male']} />
        </div>
        <div style={{ fontSize: 12, marginLeft: 4 }}>Post Punk Music</div>
      </div>
      <div style={{ fontSize: 12, marginBottom: 4 }}>Playlist: 00:00 Not Found 03:50 PixelArt...</div>
    </div>

  </div>
`

export const YoutubeCard = () => {
  return (
    <div style={{ margin: 5, display: 'flex', borderRadius: 10, height: 'fit-content', backgroundColor: 'white' }}>

      <div style={{ height: 250, width: 300, alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'relative', backgroundColor: '#475569' }}>

        <PixelArtCard random={true} tags={['human-male']} />
        <div style={{ height: 7, width: '100%', backgroundColor: 'red', position: 'absolute', bottom: 0 }}></div>
        <div style={{ right: 4, position: 'absolute', bottom: 10, backgroundColor: 'black', color: 'white' }}>1:49:51</div>
      </div>

      <div style={{ padding: 20 }}>
        <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 4 }}>Russian Doomer Music 1 Vol. 3</div>
        <div style={{ fontSize: 14, marginBottom: 4 }}>1.240.113 views - 1 Year ago</div>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ width: 40, height: 40, backgroundColor: 'black' }}>
            <PixelArtCard random={true} tags={['human-male']} />
          </div>
          <div style={{ fontSize: 12, marginLeft: 4 }}>Post Punk Music</div>
        </div>
        <div style={{ fontSize: 12, marginBottom: 4 }}>Playlist: 00:00 Not Found 03:50 PixelArt...</div>
      </div>

    </div>
  )
}
