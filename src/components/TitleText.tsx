import React from 'react'

export const TitleText = ({value} : {value: string}) => {
  return (
    <p className=' text-center font-press w-full p-4  bg-indigo-200 my-10'>{value}</p>
  )
}
