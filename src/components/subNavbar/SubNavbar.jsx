"use client";
import { phoneIcon, SearchIcon } from "@/assets/icons";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  
  display:none;

  @media(min-width:992px){
  padding: 20px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  }
`;
const ContactInfo=styled.div`
display:flex;
gap:20px;
align-items:center;
`
const TextInfo=styled.div`
display:flex;
flex-direction:column;

p{
margin-bottom:0
}
`

const MiddleText=styled.h2`
`

const SubNavbar = () => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <ContactInfo>{phoneIcon}
            <TextInfo>
            <p>for futher enquiries:</p>
            <p>+91 2365123945</p>
            </TextInfo>
          </ContactInfo>

          <MiddleText>
            SAFAR
          </MiddleText>

          {SearchIcon}
        </ContentWrapper>
      </Container>
    </>
  );
};

export default SubNavbar;
