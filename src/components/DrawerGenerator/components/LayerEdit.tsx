
import { LayerProps } from '../hooks/useLayerContainer';
import styles from '../styles/layer.module.css'
import { LayerButton } from './LayerButton';
import { Layer } from './Layer';
import { PixelArtFace } from 'react-pixelart-face-card';


interface Props {
    id: string;
    selected?: boolean;
    layer: LayerProps;
    showDeleteButton: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
    onChangeOrder: React.ChangeEventHandler<HTMLInputElement>;
}
export const LayerEdit = ({ id, selected, showDeleteButton, layer, onClick, onClickDelete, onChangeOrder }: Props) => {
    return (
        <div
            onClick={onClick}
            className={` w-full min-h-80 bg-slate-200 p-2 m-0.5 rounded-sm flex cursor-pointer relative  ${selected ? 'text-white bg-slate-800' : '!text-slate-800'}`}
        >
            <div style={{ width: '100px', height: '100px', position: 'relative' }}>
                <PixelArtFace size={100} animate={false} />
                <Layer
                    id={id}
                    data={layer.data}
                    animate={false}
                />
            </div>

            <div>
                <div>Layer #{id}</div>

                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className={`label-text-alt ${selected ? 'text-white bg-slate-800' : '!text-slate-800'}`}>z-index</span>
                </label>
                <input
                value={layer.order}
                onChange={onChangeOrder}
                type="number" placeholder="zIndex"  className={`input input-bordered w-full max-w-xs  !text-slate-800`} />
               
                </div>
               
            </div>

            {
                showDeleteButton &&

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClickDelete!(e)
                    }}
                    className="btn btn-circle absolute right-4 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>


            }

        </div>
    )
}
