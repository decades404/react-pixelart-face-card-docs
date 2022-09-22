
import { useContext } from 'react';
import { FaceGeneratorContext } from '../FaceGenerator';

interface Props {
    id?: string;
}

const IMPORT_TEXT = 'import {  PixelArtCard } from "react-pixelart-face-card";';
export const GenerateCode = ({ id = 'generateCode' }: Props) => {

    const {generatedCode, generateCode} = useContext(FaceGeneratorContext);
    return (


        <div className='w-full'>
            <label
                onClick={()=> generateCode()}
                htmlFor={"my-modal-" + id}
                className="btn modal-button  rounded-md text-xs w-full">GENERATE CODE (JSX) {'</>'}</label>

            <input type="checkbox" id={"my-modal-" + id} className="modal-toggle" />

            <label htmlFor={"my-modal-" + id} className="modal cursor-pointer">
                <label className="modal-box w-11/12 max-w-5xl relative" >
                    <h3 className="font-bold text-xs my-4">Import</h3>

                    <div className="mockup-code">
                        <pre ><code> {IMPORT_TEXT}</code></pre>
                    </div>
                    <h3 className="font-bold text-xs my-4">Copy this Code</h3>

                    <div className="mockup-code">
                        <pre ><code> {generatedCode}</code></pre>
                    </div>
                </label>
            </label>


        </div>

    )
}
