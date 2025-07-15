// components/CardSection.jsx
"use client";
import React from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

import kaasImage from "../../../assets/images/image1.png";
import ratnagiri from "../../../assets/images/ratnagiri.png";
import aurangabad from "../../../assets/images/aurangabad.png";

const data = [
  {
    id: 1,
    title: "SATARA",
    description:
      "historical significance, natural beauty and cultural heritage, also known as the Kaas Pathar",
    image: kaasImage,
  },
  {
    id: 2,
    title: "RATNAGIRI",
    description: "natural beauty, tranquil atmosphere, and spiritual significance.",
    image: ratnagiri,
  },
  {
    id: 3,
    title: "AURANGABAD",
    description:
      "exquisite ancient rock-cut architecture and stunning paintings that depict the life",
    image: aurangabad,
  },
];

const ContentWrapper = styled.div`
  padding: 100px 0;
`;

const HeadingText = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

const CardGrid = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  width: 350px;
  height: 450px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const InfoBox = styled.div`
  position: absolute;
  background: #fff;
  width: 85%;
  padding: 16px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  text-align: center;
`;

const Heading = styled.h3`
  margin: 0;
  font-weight: 900;
  font-size: 18px;
`;

const Description = styled.p`
  font-style: italic;
  font-weight: 600;
  color: #333;
  margin-top: 8px;
`;

const LocationCardSection = () => {
  return (
    <Container>
      <ContentWrapper id="destination">
        <HeadingText>Popular Destinations</HeadingText>
        <CardGrid>
          {data.map((place) => (
            <Card key={place.id} bg={place.image.src}>
              <InfoBox>
                <Heading>{place.title}</Heading>
                <Description>{place.description}</Description>
              </InfoBox>
            </Card>
          ))}
        </CardGrid>
      </ContentWrapper>
    </Container>
  );
};

export default LocationCardSection;
