import styles from '../styles/code.module.css'
import { useContext } from 'react';
import { MainContainerContext } from './MainContainer';

const IMPORT_TEXT = 'import { Layer, PixelArtCard } from "react-pixelart-face-card";';
export const CodeContainer = () => {

  const { generatedCode } = useContext(MainContainerContext);
  return (
    <div className=''>

      <h3 className="font-bold text-lg my-4">Import</h3>

      <div className="mockup-code">
        <pre ><code> {IMPORT_TEXT}</code></pre>
      </div>
      <h3 className="font-bold text-lg my-4">Copy this Code</h3>

      <div className="mockup-code">
        <pre ><code> {generatedCode}</code></pre>
      </div>



    </div>
  )
}
