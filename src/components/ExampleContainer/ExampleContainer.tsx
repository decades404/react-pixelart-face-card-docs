import React from 'react'
import { useExampleContainer } from './hooks/useExampleContainer'

interface Props {
    children?: React.ReactElement | React.ReactElement[];
    code: string
}

export const ExampleContainer = ({ children, code }: Props) => {

    const { activeModal, changeModal } = useExampleContainer();

    return (
        <div className='m-2 '>
            <div className='w-full bg-slate-800 text-white px-6 '>

                <div className="tabs tabs-boxed bg-transparent    ">
                    <a
                        onClick={() => changeModal(0)}
                        className={` tab  !rounded-none ${activeModal == 0 ? 'tab-active' : 'text-white'}`}>Preview</a>
                    <a
                        onClick={() => changeModal(1)}
                        className={` tab  !rounded-none ${activeModal == 1 ? 'tab-active' : 'text-white'}`}>Code (JSX)</a>

                </div>

            </div>
            <div className='bg-indigo-50 shadow-lg shadow-indigo-700/50  h-[27rem] items-center justify-center flex'>
                {activeModal == 0 &&
                    <div className=' p-4'>
                        {children}
                    </div>
                }

                {activeModal == 1 &&
                    <div className='relative  p-4 w-full h-full '>
                        {children}
                        <div className='absolute top-0 right-0 z-50 w-full h-full p-4 bg-slate-900 text-white overflow-scroll text-sm'>
                            <pre><code> {code} </code></pre>

                        </div>

                    </div>
                }
            </div>

        </div>
    )
}
