// components/ServicesSection.jsx
"use client";
import React from "react";
import styled from "@emotion/styled";
// src/data/servicesData.js
import { aeroplane, cars, hotel, spoons } from "@/assets/icons";
import { Container } from "react-bootstrap";

export const servicesData = [
  {
    icon: aeroplane,
    title: "Flight services",
    desc: "arrival & departure",
  },
  {
    icon: spoons,
    title: "Food services",
    desc: "catering services",
  },
  {
    icon: cars,
    title: "Travel services",
    desc: "pick-up/drop",
  },
  {
    icon: hotel,
    title: "Hotel services",
    desc: "check-in/out",
  },
];

const SectionWrapper = styled.div`
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr ;
  gap: 30px;
  @media (min-width:768px){
      grid-template-columns: 1fr 1fr 1fr 1fr;

  }
`;

const ServiceCard = styled.div`
  background: #fff;
  padding: 30px 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &:hover {
    transform: translateY(-5px);
  }
`;


const ServiceTitle = styled.h4`
`;

const Description = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #555;
`;

const ServicesSection = () => {
  return (
    <SectionWrapper id="services">
        <Container>
      <Title>We have best services offer for you!</Title>
      <ServicesGrid>
        {servicesData.map((item, index) => (
          <ServiceCard key={index}>
          {item.icon} 
            <ServiceTitle>{item.title}</ServiceTitle>
            <Description>{item.desc}</Description>
          </ServiceCard>
        ))}
      </ServicesGrid>
      </Container>
    </SectionWrapper>
  );
};

export default ServicesSection;
