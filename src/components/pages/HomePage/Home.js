import React from 'react'
import InfoSection from '../../InfoSection/InfoSection'
import Pricing from '../../Pricing/Pricing'
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
      <Pricing />      
    </>
  )
}

export default Home