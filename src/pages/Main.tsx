import { Layer, PixelArtCard } from "react-pixelart-face-card";
import { Examples } from "../components/Examples"

import { MainContainer } from "../components/DrawerGenerator/components/MainContainer"
import { Installation } from "../components/Installation"
import { Title } from "../components/Title"
import { TitleText } from "../components/TitleText"
import { FaceGenerator } from "../components/FaceGenerator/FaceGenerator";


export const Main = () => {
  return (
    <div className=' bg-indigo-100 '>
      <Title />
      <Installation />

      <FaceGenerator/>
      

      <TitleText value="CUSTOM DRAWER GENERATOR"/>
      <MainContainer/>

     


      <Examples/>
    
      <div>

      </div>
    </div>
  )
}
