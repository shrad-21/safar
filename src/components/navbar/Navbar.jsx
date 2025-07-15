"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";
import { facebook, twitter, youtube } from "@/assets/icons";

const ContentWrapper = styled.div`
  background-color: #323461;
  padding: 20px 0;
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

const LeftIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  svg {
    transition: transform 0.3s ease, fill 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      fill: #ffd700; /* Example: golden yellow on hover */
    }
  }
`;

const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  z-index: 1001;

  @media (min-width: 992px) {
    display: none;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &.open span:nth-of-type(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open span:nth-of-type(2) {
    opacity: 0;
  }
  &.open span:nth-of-type(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

// Desktop nav list
const DesktopNavList = styled.ul`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    gap: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }
`;

// Mobile nav list (below navbar)
const MobileNavList = styled.ul`
  text-align: center;
  list-style: none;
  padding: ${({ open }) => (open ? "20px 0" : "0")};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ open }) => (open ? "20px" : "0")};
  max-height: ${({ open }) => (open ? "300px" : "0")};
  overflow: hidden;
  transition: all 0.4s ease;
  margin-top: 20px;

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  const navLinks = ["Home", "Destination", "Package", "Gallery", "Services"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ContentWrapper>
      <Container>
        <RowWrapper>
          {/* Icons */}
          <LeftIcons>
            {youtube}
            {facebook}
            {twitter}
          </LeftIcons>

          {/* Desktop Nav */}
          <DesktopNavList>
            {navLinks.map((link, index) => (
              <NavItem
                key={index}
                onClick={() => {
                  const section = document.getElementById(link.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link}
              </NavItem>
            ))}
          </DesktopNavList>

          {/* Hamburger */}
          <Hamburger
            className={menuOpen ? "open" : ""}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </RowWrapper>

        {/* Mobile Dropdown Nav */}
        <MobileNavList open={menuOpen}>
          {navLinks.map((link, index) => (
            <NavItem key={index}>{link}</NavItem>
          ))}
        </MobileNavList>
      </Container>
    </ContentWrapper>
  );
};

export default Navbar;
