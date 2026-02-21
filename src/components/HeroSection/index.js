import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants"
import Typewriter from "typewriter-effect";
import TopImage from "../../images/my-img.png";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  margin-top: -70px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;


export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: -5px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

   @media (max-width: 640px) {
    font-size: 16px;
     line-height: 32px;
   }
 `;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    color: #fff;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: #a17bea;
    background: linear-gradient(225deg, #5946f0 0%, #ca84e6 100%);
    background: -moz-linear-gradient(225deg, #5946f0 0%, #ca84e6 100%);
    background: -webkit-linear-gradient(225deg, #5946f0 0%, #ca84e6 100%);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

export const HeroImg = styled.img`
  margin: 20px -90px 20px 20px; 
  position: relative;
  width: 750px;
  height: 750px;

  @media (max-width: 1024px) {
    margin-right: 0px;
    width: 550px;
    height: 550px;
  }

  @media (max-width: 960px) {
    margin-right: 0px;
    width: 650px;
    height: 650px;
    margin-bottom: -100px;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    margin-bottom: -50px;
    max-width: 300px;
    max-height: 300px;
  }
`;


const HeroSection = () => {
    return (
        <div>
            <HeroContainer id="about">
                <HeroInnerContainer>
                    <HeroLeftContainer>
                    <Title>Hi, I'm<br />{Bio.name}</Title>
                    <TextLoop>I'm a
                    <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 3000,
                                    }}
                                />
                            </Span>
                    </TextLoop>
                     <SubTitle>{Bio.description}</SubTitle>
                     <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>    
                    </HeroLeftContainer>
                    <HeroRightContainer>
                    <HeroImg src={TopImage} alt="Hero Image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
        )
}

export default HeroSection