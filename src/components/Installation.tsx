const lines = [
    "import { PixelArtCard }  from 'react-pixelart-face-card'",
    "<PixelArtCard  random={true} size={200} tags={['human-female','human-male']}/>"
]

export const Installation = () => {
  return (
    <div className='font-press m-4  grid grid-cols-1 md:grid-cols-2  items-center'>
    <div className="mx-4">
      <p className='py-6 text-center'>INSTALLATION</p>

      <div className="flex justify-center">
        <div className="mockup-code">
          <pre data-prefix="$"><code>npm install react-pixelart-face-card --save</code></pre>
          <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
          <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
      </div>
    </div>

    <div className="mx-4">
      <p className='py-6 text-center'>USAGE</p>
      <div className="flex justify-center">
        <div className="mockup-code">
          <pre><code>{lines[0]} </code></pre>
          <pre> <code>{lines[1]}</code></pre>
          <pre> <code></code></pre>
        </div>
      </div>
    </div>


  </div>
  )
}
