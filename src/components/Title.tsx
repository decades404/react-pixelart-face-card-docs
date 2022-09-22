import { PixelArtCard } from 'react-pixelart-face-card'

const SIZE = 110;
const items = 32;

export const Title = () => {
    return (
        <div className='items-center text-center'>
            <div className='grid overflow-hidden sm:grid-cols-4 sm:max-h-64  lg:max-h-max  md:grid-cols-10 lg:grid-cols-16  bg-indigo-400 py-4  '>
                {
                    Array.from(Array(items).keys()).map((i) => (
                        <div className='flex relative justify-center h-28'>
                            <PixelArtCard random={true} tags={['human-female', 'human-male']} />
                        </div>
                    ))
                }
            </div>

            <div className='py-8 bg-indigo-700'>
                <p className='font-press text-amber-400 text-2xl'>Pixel Art Face Card </p>
            </div>

            <div className='grid overflow-hidden sm:grid-cols-4 sm:max-h-64  lg:max-h-max  md:grid-cols-10 lg:grid-cols-16  bg-indigo-400 py-4 '>
                {
                    Array.from(Array(items).keys()).map((i) => (
                        <div className='flex relative justify-center h-28'>
                            <PixelArtCard random={true} tags={['human-female','human-male']} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
