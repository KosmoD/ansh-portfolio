import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg'
import { GiGamepad } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>My Projects:-</PricingHeading>
          <PricingContainer>
            <PricingCard to='//https://github.com/KosmoD/Web'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <CgWebsite />
                </PricingCardIcon>
                <PricingCardPlan>Html Css website</PricingCardPlan>
                <PricingCardCost>Free</PricingCardCost>
                <PricingCardLength>Portfolio Website</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>An basic portfolio website.</PricingCardFeature>                  
                </PricingCardFeatures>
                <Button primary>Code</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='//https://github.com/KosmoD/ansh-portfolio'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <CgWebsite />
                </PricingCardIcon>
                <PricingCardPlan>React.js website</PricingCardPlan>
                <PricingCardCost>Free</PricingCardCost>
                <PricingCardLength>Portfolio Website</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>A advance portfolio website build with React.js (This website).</PricingCardFeature>                  
                </PricingCardFeatures>
                <Button primary>Code</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='//https://github.com/KosmoD/Web'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiGamepad />
                </PricingCardIcon>
                <PricingCardPlan>Tic Tac Toe</PricingCardPlan>
                <PricingCardCost>Free</PricingCardCost>
                <PricingCardLength>javascript game</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Tic Tac Toe made with javascript.</PricingCardFeature>                  
                </PricingCardFeatures>
                <Button primary>Code</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;