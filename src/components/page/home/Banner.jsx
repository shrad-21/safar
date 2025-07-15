"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";
import bannerImg from "../../../assets/images/banner.jpg";
import Button from "@/components/common/Button";

const ContentWrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${bannerImg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 700px;
  width: 100%;
  opacity: 2;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const BannerText = styled.h1`
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  color: white;
  letter-spacing: 5px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 80px;
  }
`;
const SubText = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap:20px;
`;

const Banner = () => {
    const handleScroll = () => {
  const section = document.getElementById("contact-form");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <>
      <ContentWrapper>
        <Container>
          <BannerText>
            JOURNEY TO <br></br>EXPLORE PLACES
          </BannerText>
          <SubText>
            Enjoy the fresh breeze of nature, breathtaking panoramic views.
          </SubText>
          <ButtonContainer>
            <Button bg="#323461" onClick={handleScroll}>Learn More</Button>
            <Button bg="#fff" color="#000" onClick={handleScroll}>
              Book Now
            </Button>
          </ButtonContainer>
        </Container>
      </ContentWrapper>
    </>
  );
};

export default Banner;
