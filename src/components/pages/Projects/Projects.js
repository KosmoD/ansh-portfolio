import React from 'react';
import { Pricing } from '../..';
import InfoSection from '../../InfoSection/InfoSection'

import { homeObjOne, homeObjThree } from './Data';

function Projects() {
  return (
    <>
      <Pricing/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Projects;