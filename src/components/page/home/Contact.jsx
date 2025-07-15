import { message } from "@/assets/icons";
import InputComponent from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import styled from "@emotion/styled";
import React from "react";
import { Container } from "react-bootstrap";

const ContentWrapper = styled.div`
  padding: 0 0 100px 0;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  gap:30px;

  @media (min-width:992px){
    flex-direction: row;
  }
`;
const ContactInfo = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  gap:15px;

   @media (min-width:992px){
    width:50%;
  }
`;
const TextInfo = styled.div`
  background-color: #323461;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 30px;

  p {
    color: #a7a2a2;
    font-size: 16px;
    text-align: center;
  }
  h3 {
    color: white;
    margin-bottom: 30px;
  }
`;
const AddressInfo = styled.div`
  /* border: 1px solid #000 ; */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  padding: 30px;
`;

const ContactForm = styled.div`
width:100%;
background: #D9D9D9;
padding: 20px;

h5{
    margin-bottom: 50px;
}

  @media (min-width:992px){
    width:50%;
  }
`;


const Contact = () => {
  return (
    <>
        <Container>
      <ContentWrapper>
          <ContactInfo>
            <TextInfo>
              {message}
              <h3>Contact us for booking!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                fugit vel ipsum pariatur suscipit est voluptatem dicta. Qui
                veritatis nemo veniam deleniti! Voluptate possimus provident
                maiores est voluptatibus earum quia.
              </p>
            </TextInfo>
            <AddressInfo>
              <h5>Location</h5>
              <hr/>
              <p>Travel Agency</p>
              <hr/>
              <p>222,Yes Road</p>
              <hr/>
              <p>Navi Mumbai</p>
            </AddressInfo>
          </ContactInfo>
          <ContactForm id="contact-form">
            <h5>Fill out this form </h5>
            <InputComponent label="Name" placeholder="Name" />
            <InputComponent label="Email" placeholder="Email" />
            <InputComponent label="Phone" placeholder="Phone" type="number"/>
            <TextArea label="Message" placeholder="Message" />
          </ContactForm>
      </ContentWrapper>
        </Container>
    </>
  );
};

export default Contact;
