// import styled from '@emotion/styled'
"use client";

import React from 'react'
import { Container } from 'react-bootstrap'


// const Gallery = () => {
//   return (
//     <>
//     <ContentWrapper>
//     <Container>
//         <SubText>Gallery</SubText>
//         <HeadText>PHOTOS FROM TRAVELLERS</HeadText>
    
//     </>
//   )
// }

// export default Gallery

import styled from "@emotion/styled";

// Import images
import img1 from "../../../assets/images/cst.jpg";
import img2 from "../../../assets/images/pagoda.jpg";
import img3 from "../../../assets/images/marines.jpg";
import img4 from "../../../assets/images/cave.jpg";
import img5 from "../../../assets/images/gom.jpg";
import img6 from "../../../assets/images/temple.jpg";
import img7 from "../../../assets/images/temple2.jpg";
import img8 from "../../../assets/images/fort.jpg";
import img9 from "../../../assets/images/beach.jpg";

const images = [img1, img2, img3,img4,img5,img6,img7,img8,img9];

const ContentWrapper=styled.div`
    background-color:#323461;
    padding: 100px 0;
`
const SubText=styled.p`
    text-align: center;
    color:white;
`
const HeadText=styled.h2`
    text-align: center;
        color:white;
margin-bottom:80px;
`

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const SlideTrack = styled.div`
  display: flex;
  width: calc(300px * ${images.length * 2});
  animation: scroll 25s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Slide = styled.div`
  flex: 0 0 auto;
  width: 400px;
  height: 300px;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LoopCarousel = () => {
  return (
    <ContentWrapper id="gallery">
        <SubText>Gallery</SubText>
        <HeadText>PHOTOS FROM TRAVELLERS</HeadText>
    <CarouselWrapper>
      <SlideTrack>
        {[...images, ...images].map((img, index) => (
          <Slide key={index}>
            <Img src={img.src} alt={`carousel-${index}`} />
          </Slide>
        ))}
      </SlideTrack>
    </CarouselWrapper>

    </ContentWrapper>
  );
};

export default LoopCarousel;
