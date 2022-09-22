import { PixelArtCard } from "react-pixelart-face-card"

export const NFTCardCode =
  `
  < div style = {{ margin: 5 }}>

      <div style={{ backgroundColor: '#1e293b', color: 'white', borderRadius: 10, padding: 20, width: 250 }} >

        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }} >NFT Human 0x001122</div>
        <div style={{ height: 150, backgroundColor: 'violet', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <PixelArtCard random={true} size={130} tags={['human-male']} />
        </div>
        <div style={{ fontSize: 14, marginTop: 7 }}>Price</div>
        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>0.13 ETH</div>
        <div style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', backgroundColor: 'blue', paddingTop: 10, paddingBottom: 10, borderRadius: 10, cursor: 'pointer' }}>BUY NOW</div>
      </div>
  </div >

`

export const NFTCard = () => {
  return (
    <div style={{ margin: 5 }}>

      <div style={{ backgroundColor: '#1e293b', color: 'white', borderRadius: 10, padding: 20, width: 250 }} >

        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }} >NFT Human 0x001122</div>
        <div style={{ height: 150, backgroundColor: 'violet', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
          <PixelArtCard random={true} size={130} tags={['human-male']} />
        </div>
        <div style={{ fontSize: 14, marginTop: 7 }}>Price</div>
        <div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>0.13 ETH</div>
        <div style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', backgroundColor: 'blue', paddingTop: 10, paddingBottom: 10, borderRadius: 10, cursor: 'pointer' }}>BUY NOW</div>
      </div>
    </div>
  )
}
