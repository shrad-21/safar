"use client"
import styled from '@emotion/styled';
import React from 'react'
import { Container } from 'react-bootstrap'
import beachImg from "../../../assets/images/beachImg.jpg";
import lakeImg from "../../../assets/images/lakeImg.jpg";
import Button from '@/components/common/Button';
import { location, people } from '@/assets/icons';

const HeadingText = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;
const ContentWrapper = styled.div`
  padding: 0 0 100px 0;
`;
const HeadSubText=styled.p`
    text-align: center;
    font-size:18px;
`

const packages = [
  {
    id: 1,
    image: beachImg,
    title: "Experience the Great Holiday on Beach",
    description:
      "Laoreet, voluptatum nihil dolor sse quaerat mattis explicabo maiores, est aliquet porttitor!",
    duration: "7D/6N",
    pax: "10",
    location: "Ratnagiri",
    price: "$750",
  },
  {
    id: 2,
    image: lakeImg,
    title: "Summer Holiday to the Rankala Talao",
    description:
      "Laoreet, voluptatum nihil dolor sse quaerat mattis explicabo maiores, est aliquet porttitor!",
    duration: "7D/6N",
    pax: "10",
    location: "Kolhapur",
    price: "$550",
  },
];

const SectionWrapper = styled.div`
  padding: 60px 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width:992px){
    flex-direction:column;
  }
`;

const TravelCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  /* border-radius: 16px; */
  overflow: hidden;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); */
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-direction: row;
    /* border-radius: 16px; */
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width:992px){
  max-width: 400px;

  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px 0;

  @media (min-width:992px){
    padding: 20px 30px;
  }
`;

const Title = styled.h3`
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
`;

const Pill = styled.span`
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.1);
`;

const PriceBox = styled.div`
  background: #2e3361;
  color: #fff;
  padding: 30px;

   width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border-radius: 20px; */

  @media (min-width: 992px) {
     width: 350px;
  }
`;

const Price = styled.h4`
  font-size: 24px;
  margin: 0;
`;

const SubText = styled.span`
  font-size: 16px;
  margin: 8px 0 20px;
`;

const BookButton = styled.button`
  padding: 8px 20px;
  background: #fff;
  color: #2e3361;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #e5e7f7;
  }
`;
const Packages = () => {
     const handleScroll = () => {
  const section = document.getElementById("contact-form");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
    <Container>
      <ContentWrapper id="package">
        <HeadingText>CHECKOUT OUR PACKAGES</HeadingText>
        <HeadSubText>CHECKOUT OUR PACKAGES</HeadSubText>

         <SectionWrapper>
      <CardContainer>
        {packages.map((item) => (
          <TravelCard key={item.id}>
            <Image src={item.image.src} alt={item.title} />
            <Content>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <InfoRow>
                <Pill>{item.duration}</Pill>
                <Pill>{people} pax: {item.pax}</Pill>
                <Pill>{location} {item.location}</Pill>
              </InfoRow>
            </Content>
            <PriceBox>
              <Price>{item.price}</Price>
              <SubText>/ per person</SubText>
              {/* <BookButton>BOOK NOW</BookButton> */}
              <Button bg="#fff" color="#000" onClick={handleScroll}>Book Now</Button>
            </PriceBox>
          </TravelCard>
        ))}
      </CardContainer>
    </SectionWrapper>
      </ContentWrapper>
    </Container></>
  )
}

export default Packages