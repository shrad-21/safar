"use client"
import styled from '@emotion/styled'
import React from 'react'

const FooterContainer=styled.div`
    background-color: #323461;
    padding: 30px;

    h2{
        color:white;
        text-align: center;
        font-size: 40px;
    }
`
const Footer = () => {
  return (
    <>
    <FooterContainer>
        <h2>SAFAR</h2>
    </FooterContainer>
    </>
  )
}

export default Footer